import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from '@nestjs/common';
import { Imagens } from 'src/entities/imagens.entity';
import { ImagensService } from 'src/services/imagens.service';

@Controller('imagens')
export class ImagensController {
  constructor(private readonly libraryService: ImagensService) {}

  @Post()
  async createImagem(@Res() response, @Body() imagem: Imagens) {
    try {
      const imagens = await this.libraryService.createImagem(imagem);
      return response.status(HttpStatus.CREATED).json(imagens);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Put(':id')
  async updateImagem(@Res() response, @Param() { id }: any, @Body() imagem: Imagens) {
    try {
      const imagens = await this.libraryService.updateImagem(id, imagem);
      return response.status(HttpStatus.OK).json([{ message: 'Imagem atualizada com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  async fetchAll(@Res() response) {
    try {
      const imagens = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json(imagens);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    try {
      const imagem = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(imagem);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  async deleteById(@Res() response, @Param('id') id) {
    try {
      const imagem = await this.libraryService.deleteOne(id);
      return response.status(HttpStatus.OK).json([{ message: 'Imagem deletada com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
