import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favoritos } from './favoritos.entity';

@Entity('tb_clientes', { schema: 'icone' })
export class Clientes {
  @PrimaryGeneratedColumn('uuid', { name: 'id_cliente' })
  id_cliente: number;

  @Column('varchar', { name: 'nome', length: 250 })
  nome: string;

  @Column('varchar', { name: 'adress_cep', length: 8 })
  adress_cep: string;

  @Column('varchar', { name: 'address_num', nullable: true, length: 11 })
  address_num: string | null;

  @Column('varchar', { name: 'cpf', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'email', length: 100 })
  email: string;

  @Column('varchar', { name: 'telefone', length: 11 })
  telefone: string;

  @Column('date', { name: 'data_nascimento' })
  data_nascimento: string;

  @Column('varchar', { name: 'sexo' })
  sexo: string;

  @Column('varchar', { name: 'identidade', length: 12 })
  identidade: string;

  @OneToMany(() => Favoritos, (tbFavoritos) => tbFavoritos.id_cliente)
  favoritos: Favoritos[];
}
