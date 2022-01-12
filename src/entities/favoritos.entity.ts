import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Produtos } from './produtos.entity';
import { Clientes } from './clientes.entity';

@Entity('tb_favoritos', { schema: 'icone' })
export class Favoritos {
  @PrimaryGeneratedColumn('uuid', { name: 'id_favorito' })
  @ApiProperty({description: "column using uuid generator"})
  id_favorito: string;

  @Column({ select: false })
  @ApiProperty()
  id_cliente: string;

  @Column({ select: false })
  @ApiProperty()
  id_produto: string;

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
