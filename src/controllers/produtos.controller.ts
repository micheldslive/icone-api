import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from '@nestjs/common';
import { Produtos } from 'src/entities/produtos.entity';
import { ProdutosService } from 'src/services/produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly libraryService: ProdutosService) {}

  @Post()
  async createProduto(@Res() response, @Body() produto: Produtos) {
    try {
      const produtos = await this.libraryService.createProduto(produto);
      return response.status(HttpStatus.CREATED).json(produtos);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Put(':id')
  async updateProduto(@Res() response, @Param() { id }: any, @Body() produto: Produtos) {
    try {
      const produtos = await this.libraryService.updateProduto(id, produto);
      return response.status(HttpStatus.OK).json([{ message: 'Produto atualizado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  async fetchAll(@Res() response) {
    try {
      const produtos = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json(produtos);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    try {
      const produto = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(produto);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  async deleteById(@Res() response, @Param('id') id) {
    try {
      const produto = await this.libraryService.deleteOne(id);
      return response.status(HttpStatus.OK).json([{ message: 'Produto deletado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
