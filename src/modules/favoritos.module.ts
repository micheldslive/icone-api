import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritosController } from 'src/controllers/favoritos.controller';

import { Favoritos } from 'src/entities/favoritos.entity';
import { FavoritosService } from 'src/services/favoritos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Favoritos])],
  providers: [FavoritosService],
  controllers: [FavoritosController],
})
export class FavoritosModule {}
