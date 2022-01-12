import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Favoritos } from './favoritos.entity';

@Entity('tb_clientes')
export class Clientes {
  @PrimaryGeneratedColumn('uuid', { name: 'id_cliente' })
  @ApiProperty({description: "column using uuid generator"})
  id_cliente: string;

  @Column()
  @ApiProperty()
  nome: string;

  @Column()
  @ApiProperty()
  adress_cep: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  address_num: string | null;

  @Column()
  @ApiProperty()
  cpf: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  telefone: string;

  @Column('date', { name: 'data_nascimento' })
  @ApiProperty()
  data_nascimento: string;

  @Column()
  @ApiProperty()
  sexo: string;

  @Column()
  @ApiProperty()
  identidade: string;

  @OneToMany(() => Favoritos, (tbFavoritos) => tbFavoritos.id_cliente)
  favoritos: Favoritos[];
}
