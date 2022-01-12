import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Favoritos } from './favoritos.entity';

@Entity('tb_clientes', { schema: 'icone' })
export class Clientes {
  @PrimaryGeneratedColumn('uuid', { name: 'id_cliente' })
  @ApiProperty({description: "column using uuid generator"})
  id_cliente: string;

  @Column('varchar', { name: 'nome', length: 250 })
  @ApiProperty()
  nome: string;

  @Column('varchar', { name: 'adress_cep', length: 8 })
  @ApiProperty()
  adress_cep: string;

  @Column('varchar', { name: 'address_num', nullable: true, length: 11 })
  @ApiPropertyOptional()
  address_num: string | null;

  @Column('varchar', { name: 'cpf', length: 11 })
  @ApiProperty()
  cpf: string;

  @Column('varchar', { name: 'email', length: 100 })
  @ApiProperty()
  email: string;

  @Column('varchar', { name: 'telefone', length: 11 })
  @ApiProperty()
  telefone: string;

  @Column('date', { name: 'data_nascimento' })
  @ApiProperty()
  data_nascimento: string;

  @Column('varchar', { name: 'sexo' })
  @ApiProperty()
  sexo: string;

  @Column('varchar', { name: 'identidade', length: 12 })
  @ApiProperty()
  identidade: string;

  @OneToMany(() => Favoritos, (tbFavoritos) => tbFavoritos.id_cliente)
  favoritos: Favoritos[];
}
