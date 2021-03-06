import { Body, Controller, Get, HttpStatus, Param, Post, Put, Delete, Res, ParseUUIDPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Clientes } from 'src/entities/clientes.entity';
import { ClientesService } from 'src/services/clientes.service';
import { ClientesBody } from 'src/swagger/body.extends';

@Controller('clientes')
@ApiTags('Clientes')
export class ClientesController {
  constructor(private readonly libraryService: ClientesService) {}

  @Post()
  @ApiBody({ type: ClientesBody })
  @ApiOperation({ summary: 'Cria um novo registro de cliente' })
  @ApiResponse({ status: 200, type: Clientes, isArray: true })
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
  @ApiBody({ type: ClientesBody })
  @ApiOperation({ summary: 'Atualiza um cliente pelo {ìd}' })
  @ApiResponse({ status: 200, type: Clientes, isArray: true })
  async updateCliente(@Res() response, @Param('id', new ParseUUIDPipe()) id: string, @Body() cliente: Clientes) {
    try {
      const updateOne = await this.libraryService.updateCliente(id, cliente);
      const updateResponse = updateOne.affected
        ? { message: 'Cliente atualizado com sucesso' }
        : { message: 'Cliente não encontrado' };
      return response.status(HttpStatus.OK).json(updateResponse);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os clientes' })
  @ApiResponse({ status: 200, type: Clientes, isArray: true })
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
  @ApiOperation({ summary: 'Retorna um cliente pelo {ìd}' })
  @ApiResponse({ status: 200, type: Clientes, isArray: true })
  async findById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const clientes = await this.libraryService.findOne(id);
      const cliente = clientes || { message: 'Cliente não encontrado' };
      return response.status(HttpStatus.OK).json(cliente);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta um cliente pelo {ìd}' })
  @ApiResponse({ status: 200, type: Clientes, isArray: true })
  async deleteById(@Res() response, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const deleteOne = await this.libraryService.deleteOne(id);
      const cliente = deleteOne.affected
        ? { message: 'Cliente deletado com sucesso' }
        : { message: 'Cliente não encontrado' };
      return response.status(HttpStatus.OK).json(cliente);
    } catch (error) {
      return response.status(HttpStatus.FORBIDDEN).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  }
}
