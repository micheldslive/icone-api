import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res } from '@nestjs/common';
import { Clientes } from 'src/entities/clientes.entity';
import { ClientesService } from 'src/services/clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly libraryService: ClientesService) {}

  @Post()
  async createCliente(@Res() response, @Body() cliente: Clientes) {
    try {
      const clientes = await this.libraryService.createCliente(cliente);
      return response.status(HttpStatus.CREATED).json(clientes);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Put(':id')
  async updateCliente(@Res() response, @Param() { id }: any, @Body() cliente: Clientes) {
    try {
      const clientes = await this.libraryService.updateCliente(id, cliente);
      return response.status(HttpStatus.OK).json([{ message: 'Cliente atualizado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  async fetchAll(@Res() response) {
    try {
      const clientes = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json(clientes);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    try {
      const cliente = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(cliente);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  async deleteById(@Res() response, @Param('id') id) {
    try {
      const cliente = await this.libraryService.deleteOne(id);
      return response.status(HttpStatus.OK).json([{ message: 'Cliente deletado com sucesso' }]);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
