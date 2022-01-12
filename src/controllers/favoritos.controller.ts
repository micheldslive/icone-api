import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res, ParseUUIDPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Favoritos } from 'src/entities/favoritos.entity';
import { FavoritosService } from 'src/services/favoritos.service';
import { FavoritosBody } from 'src/swagger/body.extends';

@Controller('favoritos')
@ApiTags('Favoritos')
export class FavoritosController {
  constructor(private readonly libraryService: FavoritosService) {}

  @Post()
  @ApiBody({ type: FavoritosBody })
  @ApiOperation({ summary: 'Cria um novo registro de favorito' })
  @ApiResponse({ status: 200, type: Favoritos, isArray: true })
  async createFavorito(@Res() response, @Body() favorito: Favoritos) {
    try {
      const favoritos = await this.libraryService.createFavorito(favorito);
      return response.status(HttpStatus.CREATED).json(favoritos);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Put(':id')
  @ApiBody({ type: FavoritosBody })
  @ApiOperation({ summary: 'Atualiza um favorito pelo {ìd}' })
  @ApiResponse({ status: 200, type: Favoritos, isArray: true })
  async updateFavorito(@Res() response, @Param('id', new ParseUUIDPipe()) id: string, @Body() favorito: Favoritos) {
    try {
      const updateOne = await this.libraryService.updateFavorito(id, favorito);
      const updateResponse = updateOne.affected
        ? { message: 'Favorito atualizado com sucesso' }
        : { message: 'Favorito não encontrado' };
      return response.status(HttpStatus.OK).json(updateResponse);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os favoritos' })
  @ApiResponse({ status: 200, type: Favoritos, isArray: true })
  async fetchAll(@Res() response) {
    try {
      const favoritos = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json(favoritos);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retorna um favorito pelo {ìd}' })
  @ApiResponse({ status: 200, type: Favoritos, isArray: true })
  async findById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const favoritos = await this.libraryService.findOne(id);
      const favorito = favoritos || { message: 'Favorito não encontrado' };
      return response.status(HttpStatus.OK).json(favorito);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta um favorito pelo {ìd}' })
  @ApiResponse({ status: 200, type: Favoritos, isArray: true })
  async deleteById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const deleteOne = await this.libraryService.deleteOne(id);
      const favorito = deleteOne.affected
        ? { message: 'Favorito deletado com sucesso' }
        : { message: 'Favorito não encontrado' };
      return response.status(HttpStatus.OK).json(favorito);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
