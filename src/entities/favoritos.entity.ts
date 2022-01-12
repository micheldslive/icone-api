import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from './produtos.entity';
import { Clientes } from './clientes.entity';

@Entity('tb_favoritos', { schema: 'icone' })
export class Favoritos {
  @PrimaryGeneratedColumn('uuid', { name: 'id_favorito' })
  id_favorito: number;

  @Column('int', { name: 'id_cliente' })
  id_cliente: number;

  @Column('int', { name: 'id_produto' })
  id_produto: number;

  @ManyToOne(() => Produtos, (tbProdutos) => tbProdutos.favoritos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_produto', referencedColumnName: 'id_produto' }])
  produto: Produtos;

  @ManyToOne(() => Clientes, (tbClientes) => tbClientes.favoritos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_cliente', referencedColumnName: 'id_cliente' }])
  cliente: Clientes;
}
