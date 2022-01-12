import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { Categorias } from 'src/entities/categorias.entity';
import { CategoriasService } from 'src/services/categorias.service';
import { CategoriasBody } from 'src/swagger/body.extends';

@Controller('categorias')
@ApiTags('Categorias')
export class CategoriasController {
  constructor(private readonly libraryService: CategoriasService) {}

  @Post()
  @ApiBody({ type: CategoriasBody })
  @ApiOperation({ summary: "Cria um novo registro de categoria"})
  @ApiResponse({ status: 200, type: Categorias, isArray: true })
  async createCategoria(@Res() response, @Body() categoria: Categorias) {
    try {
      const categorias = await this.libraryService.createCategoria(categoria);
      return response.status(HttpStatus.CREATED).json(categorias);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Put(':id')
  @ApiBody({ type: CategoriasBody })
  @ApiOperation({ summary: "Atualiza uma categoria pelo {ìd}"})
  @ApiResponse({ status: 200, type: Categorias, isArray: true })
  async updateCategoria(@Res() response, @Param('id', new ParseUUIDPipe()) id: string, @Body() categoria: Categorias) {
    try {
      const categorias = await this.libraryService.updateCategoria(id, categoria);
      return response.status(HttpStatus.OK).json([{ message: 'Categoria atualizada com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  @ApiBody({ type: CategoriasBody })
  @ApiOperation({ summary: "Retorna todas as categorias"})
  @ApiResponse({ status: 200, type: Categorias, isArray: true })
  async fetchAll(@Res() response) {
    try {
      const categorias = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json(categorias);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get('/:id')
  @ApiBody({ type: CategoriasBody })
  @ApiOperation({ summary: "Retorna uma categoria pelo {ìd}"})
  @ApiResponse({ status: 200, type: Categorias, isArray: true })
  async findById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const categoria = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(categoria);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  @ApiBody({ type: CategoriasBody })
  @ApiOperation({ summary: "Deleta uma categoria pelo {ìd}"})
  @ApiResponse({ status: 200, type: Categorias, isArray: true })
  async deleteById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const categoria = await this.libraryService.deleteOne(id);
      return response.status(HttpStatus.OK).json([{ message: 'Categoria deletada com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
