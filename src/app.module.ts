import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { PhotoModule } from './database/photo.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'leandro',
      password: 'root',
      database: 'postgres',
      synchronize: false,
      entities: [__dirname + '/database/entity/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
    }),
    PhotoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
