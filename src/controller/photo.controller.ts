import { Controller, Get, Inject } from "@nestjs/common";
import { Photo } from "src/database/entity/photo.entity";
import { Repository } from "typeorm";


@Controller()
export class PhotoController {

    constructor(
        @Inject('PHOTO_REPOSITORY')
        private readonly photoRespotiroy: Repository<Photo>
    ) {}

    @Get("allPhotos")
    async getAll(): Promise<Photo[]> {
        return (await this.photoRespotiroy.find()).length == 0 ? [] : await this.photoRespotiroy.find();
    }
}