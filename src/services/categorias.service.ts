import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias } from 'src/entities/categorias.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  findAll(): Promise<Categorias[]> {
    return this.categoriasRepository.find();
  }

  findOne(id: string): Promise<Categorias> {
    return this.categoriasRepository.findOne(id);
  }

  createCategoria(categorias: Categorias): Promise<Categorias> {
    return this.categoriasRepository.save(categorias);
  }

  updateCategoria(id: string, categoria: Categorias): Promise<any> {
    return this.categoriasRepository.update(id, categoria);
  }

  deleteOne(id: string) {
    return this.categoriasRepository.delete(id);
  }
}
