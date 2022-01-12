import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from './produtos.entity';

@Entity('tb_categorias', { schema: 'icone' })
export class Categorias {
  @PrimaryGeneratedColumn('uuid', { name: 'id_categoria' })
  id_categoria: number;

  @Column('varchar', { name: 'categoria', length: 100, default: () => "''" })
  categoria: string;

  @JoinColumn({
    name: 'id_categoria',
  })
  @OneToMany(() => Produtos, (tbProdutos) => tbProdutos.categoria)
  produtos: Produtos[];
}
