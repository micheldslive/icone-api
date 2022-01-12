import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from 'src/entities/clientes.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
  ) {}

  findAll(): Promise<Clientes[]> {
    return this.clientesRepository.find();
  }

  findOne(id: string): Promise<Clientes> {
    return this.clientesRepository.findOne(id);
  }

  createCliente(clientes: Clientes): Promise<Clientes> {
    return this.clientesRepository.save(clientes);
  }

  updateCliente(id: string, especialidade: Clientes): Promise<any> {
    return this.clientesRepository.update(id, especialidade);
  }

  deleteOne(id: string) {
    return this.clientesRepository.delete(id);
  }
}
