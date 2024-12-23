import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { photoProviders } from '../providers/photo.privider';
import { PhotoService } from '../services/photo.service';
import { PhotoController } from 'src/controller/photo.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [PhotoController],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
})
export class PhotoModule {}