import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from '@nestjs/common';
import { Favoritos } from 'src/entities/favoritos.entity';
import { FavoritosService } from 'src/services/favoritos.service';

@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly libraryService: FavoritosService) {}

  @Post()
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
  async updateFavorito(@Res() response, @Param() { id }: any, @Body() favorito: Favoritos) {
    try {
      const favoritos = await this.libraryService.updateFavorito(id, favorito);
      return response.status(HttpStatus.OK).json([{ message: 'Favorito atualizado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
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
  async findById(@Res() response, @Param('id') id) {
    try {
      const favorito = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(favorito);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  async deleteById(@Res() response, @Param('id') id) {
    try {
      const favorito = await this.libraryService.deleteOne(id);
      return response.status(HttpStatus.OK).json([{ message: 'Favorito deletado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
