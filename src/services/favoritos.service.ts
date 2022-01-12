import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favoritos } from 'src/entities/favoritos.entity';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favoritos)
    private favoritosRepository: Repository<Favoritos>,
  ) {}

  findAll(): Promise<Favoritos[]> {
    return this.favoritosRepository.find({
      relations: ['cliente', 'produto'],
    });
  }

  findOne(id: string): Promise<Favoritos> {
    return this.favoritosRepository.findOne(id, {
      relations: ['cliente', 'produto'],
    });
  }

  createFavorito(favorito: Favoritos): Promise<Favoritos> {
    return this.favoritosRepository.save(favorito);
  }

  updateFavorito(id: string, favorito: Favoritos): Promise<any> {
    return this.favoritosRepository.update(id, favorito);
  }

  deleteOne(id: string) {
    return this.favoritosRepository.delete(id);
  }
}
