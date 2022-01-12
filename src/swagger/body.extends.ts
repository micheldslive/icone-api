import { OmitType, PartialType, ApiExcludeController } from '@nestjs/swagger';
import { Clientes } from 'src/entities/clientes.entity';
import { Categorias } from 'src/entities/categorias.entity';
import { Favoritos } from 'src/entities/favoritos.entity';
import { Imagens } from 'src/entities/imagens.entity';
import { Produtos } from 'src/entities/produtos.entity';

@ApiExcludeController()
export class ProdutosBody extends PartialType(
  OmitType(Produtos, ['id_produto']),
) {}

export class CategoriasBody extends PartialType(
  OmitType(Categorias, ['id_categoria']),
) {}

export class ClientesBody extends PartialType(
  OmitType(Clientes, ['id_cliente']),
) {}

export class FavoritosBody extends PartialType(
  OmitType(Favoritos, ['id_favorito']),
) {}

export class ImagensBody extends PartialType(
  OmitType(Imagens, ['id_img']),
) {}
