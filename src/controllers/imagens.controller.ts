import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res, ParseUUIDPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Imagens } from 'src/entities/imagens.entity';
import { ImagensService } from 'src/services/imagens.service';
import { ImagensBody } from 'src/swagger/body.extends';

@Controller('imagens')
@ApiTags('Imagens')
export class ImagensController {
  constructor(private readonly libraryService: ImagensService) {}

  @Post()
  @ApiBody({ type: ImagensBody })
  @ApiOperation({ summary: "Cria um novo registro de imagem"})
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
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
  @ApiBody({ type: ImagensBody })
  @ApiOperation({ summary: "Atualiza imagem pelo {ìd}"})
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async updateImagem(@Res() response, @Param('id', new ParseUUIDPipe()) id: string, @Body() imagem: Imagens) {
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
  @ApiOperation({ summary: "Retorna todas as imagens"})
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
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
  @ApiOperation({ summary: "Retorna imagem pelo {ìd}"})
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async findById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
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
  @ApiOperation({ summary: "Deleta imagem pelo {ìd}"})
  @ApiResponse({ status: 200, type: Imagens, isArray: true })
  async deleteById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
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
