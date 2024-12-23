import { Photo } from 'src/database/entity/photo.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'leandro',
        password: 'root',
        database: 'photo',
        entities: [
           Photo
        ],
        synchronize: true,
        migrations: [__dirname + '../modules/database/migrations/*{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];