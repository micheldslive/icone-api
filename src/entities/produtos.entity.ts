import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Categorias } from './categorias.entity';
import { Favoritos } from './favoritos.entity';
import { Imagens } from './imagens.entity';

@Entity('tb_produtos', { schema: 'icone' })
export class Produtos {
  @PrimaryGeneratedColumn('uuid', { name: 'id_produto' })
  id_produto: string;

  @Column('varchar', { length: 255, name: 'nome' })
  nome: string;

  @Column('double')
  preco: number;

  @Column('double')
  preco_old: number;

  @Column('int')
  id_categoria: number;

  @Column('varchar', { length: 100 })
  marca: string;

  @Column('varchar', { length: 100 })
  condicao: string;

  @Column('text')
  desc: string;

  @Column('int', { default: () => "'0'" })
  disponivel: number;

  @Column('int', { default: () => "'0'" })
  estoque: number;

  @Column('int', { default: () => "'0'" })
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
