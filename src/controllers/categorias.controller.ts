import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from '@nestjs/common';
import { Categorias } from 'src/entities/categorias.entity';
import { CategoriasService } from 'src/services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly libraryService: CategoriasService) {}

  @Post()
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
  async updateCategoria(@Res() response, @Param() { id }: any, @Body() categoria: Categorias) {
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
  async findById(@Res() response, @Param('id') id) {
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
  async deleteById(@Res() response, @Param('id') id) {
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
