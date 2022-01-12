import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res, ParseUUIDPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Produtos } from 'src/entities/produtos.entity';
import { ProdutosService } from 'src/services/produtos.service';
import { ProdutosBody } from 'src/swagger/body.extends';

@Controller('produtos')
@ApiTags('Produtos')
export class ProdutosController {
  constructor(private readonly libraryService: ProdutosService) {}

  @Post()
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: "Cria um novo registro de produto"})
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
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
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: "Atualiza produto pelo {ìd}"})
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async updateProduto(@Res() response, @Param('id', new ParseUUIDPipe()) id: string, @Body() produto: Produtos) {
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
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: "Retorna Todos os Produtos"})
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
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
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: "Retorna produto pelo {ìd}"})
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async findById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
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
  @ApiBody({ type: ProdutosBody })
  @ApiOperation({ summary: "Deleta produto pelo {ìd}"})
  @ApiResponse({ status: 200, type: Produtos, isArray: true })
  async deleteById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
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
