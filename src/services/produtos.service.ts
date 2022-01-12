import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from 'src/entities/produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private medicosRepository: Repository<Produtos>,
  ) {}

  findAll(): Promise<Produtos[]> {
    return this.medicosRepository.find({
      relations: ['imagens'],
    });
  }

  findOne(id: string): Promise<Produtos> {
    return this.medicosRepository.findOne(id);
  }

  createProduto(medicos: Produtos): Promise<Produtos> {
    return this.medicosRepository.save(medicos);
  }

  updateProduto(id: string, especialidade: Produtos): Promise<any> {
    return this.medicosRepository.update(id, especialidade);
  }

  deleteOne(id: string) {
    return this.medicosRepository.delete(id);
  }
}
