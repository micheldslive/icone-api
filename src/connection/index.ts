import { ConnectionProps } from "./types";
import { Produtos } from 'src/entities/produtos.entity';
import { Clientes } from 'src/entities/clientes.entity';
import { Favoritos } from 'src/entities/favoritos.entity';
import { Categorias } from 'src/entities/categorias.entity';
import { Imagens } from 'src/entities/imagens.entity';

const HOST = process.env.HOST || 'database';
const USER = process.env.USER || 'root';
const PASS = process.env.PASS || 'icone123';
const DATA = process.env.DATA || 'icone';

export const connection: ConnectionProps = {
  type: 'mysql',
  host: HOST,
  port: 3306,
  username: USER,
  password: PASS,
  database: DATA,
  entities: [Produtos, Clientes, Favoritos, Categorias, Imagens],
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
  synchronize: true,
};
