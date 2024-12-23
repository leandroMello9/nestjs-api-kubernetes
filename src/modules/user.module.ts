import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { PhotoService } from '../services/photo.service';
import { userProvider } from 'src/providers/user.provider';
import { UserController } from 'src/controller/user.controller';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [
    ...userProvider,
    UserService,
  ],
})
export class UserModule {}