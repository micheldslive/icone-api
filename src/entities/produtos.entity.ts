import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";
import { Categorias } from './categorias.entity';
import { Favoritos } from './favoritos.entity';
import { Imagens } from './imagens.entity';

@Entity('tb_produtos', { schema: 'icone' })
export class Produtos {
  @PrimaryGeneratedColumn('uuid', { name: 'id_produto' })
  @ApiProperty({description: "column using uuid generator"})
  id_produto: string;

  @Column('varchar', { length: 255, name: 'nome' })
  @ApiProperty()
  nome: string;

  @Column('double')
  @ApiProperty()
  preco: number;

  @Column('double')
  @ApiProperty()
  preco_old: number;

  @Column({ select: false })
  @ApiProperty()
  id_categoria: string;

  @Column()
  @ApiProperty()
  marca: string;

  @Column()
  @ApiProperty()
  condicao: string;

  @Column('text')
  @ApiProperty()
  desc: string;

  @Column({ default: () => "'0'" })
  @ApiProperty()
  disponivel: number;

  @Column({ default: () => "'0'" })
  @ApiProperty()
  estoque: number;

  @Column({ default: () => "'0'" })
  @ApiProperty()
  total: number;

  @ManyToOne(() => Categorias, (tbCategorias) => tbCategorias.produtos, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_categoria', referencedColumnName: 'id_categoria' }])
  categoria: Categorias;

  @OneToMany(() => Favoritos, (tbFavoritos) => tbFavoritos.id_produto)
  favoritos: Favoritos[];

  @OneToMany(() => Imagens, (tbImagens) => tbImagens.produto)
  imagens: Imagens[];
}
