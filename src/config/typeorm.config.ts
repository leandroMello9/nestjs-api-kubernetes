import { DataSource } from 'typeorm';


const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leandro',
  password: 'root',
  database: 'postgres',
  synchronize: false,
  entities: ['**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;