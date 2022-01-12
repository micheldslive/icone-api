import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favoritos } from 'src/entities/favoritos.entity';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favoritos)
    private medicosRepository: Repository<Favoritos>,
  ) {}

  findAll(): Promise<Favoritos[]> {
    return this.medicosRepository.find({
      relations: ['especialidades'],
    });
  }

  findOne(id: string): Promise<Favoritos> {
    return this.medicosRepository.findOne(id);
  }

  createFavorito(medicos: Favoritos): Promise<Favoritos> {
    return this.medicosRepository.save(medicos);
  }

  updateFavorito(id: string, especialidade: Favoritos): Promise<any> {
    return this.medicosRepository.update(id, especialidade);
  }

  deleteOne(id: string) {
    return this.medicosRepository.delete(id);
  }
}
