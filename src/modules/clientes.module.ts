import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from 'src/controllers/clientes.controller';

import { Clientes } from 'src/entities/clientes.entity';
import { ClientesService } from 'src/services/clientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes])],
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
