import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'leandro',
    password: 'root',
    database: 'photo',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + './modules/migrations/*{.ts,.js}'],
  });
  