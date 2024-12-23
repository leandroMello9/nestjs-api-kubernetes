import { Module } from '@nestjs/common';
import { DataBaseModule } from './modules/database.module';
import { PhotoModule } from './modules/photo.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
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
    UserModule,
    PhotoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
