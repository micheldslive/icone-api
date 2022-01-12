import { Produtos } from "../entities/produtos.entity";
import { Clientes } from "../entities/clientes.entity";
import { Favoritos } from "../entities/favoritos.entity";
import { Categorias } from "../entities/categorias.entity";
import { Imagens } from "../entities/imagens.entity";

interface Props {
    type: any;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: any;
    migrations: string[];
    cli: {};
    synchronize: boolean;
}

const HOST = process.env.HOST || "database";
const USER = process.env.USER || "root";
const PASS = process.env.PASS || "icone123";
const DATA = process.env.DATA || "icone";

export const connection: Props = {
    type: 'mysql',
    host: HOST,
    port: 3306,
    username: USER,
    password: PASS,
    database: DATA,
    entities: [Produtos, Clientes, Favoritos, Categorias, Imagens],
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migration'
    },
    synchronize: true,
  }