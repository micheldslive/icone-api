import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from './produtos.entity';

@Entity('tb_imagens', { schema: 'icone' })
export class Imagens {
  @PrimaryGeneratedColumn('uuid', { name: 'id_img' })
  id_img: number;

  @Column('varchar', { name: 'url', length: 100 })
  url: string;

  @Column('int')
  id_produto: number;

  @ManyToOne(() => Produtos, (tbProdutos) => tbProdutos.imagens, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_produto', referencedColumnName: 'id_produto' }])
  produto: Produtos;
}
