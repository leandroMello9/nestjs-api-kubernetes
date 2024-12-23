import { Controller, Get } from "@nestjs/common";
import { User } from "src/database/entity/user.entity";
import { UserService } from "src/services/user.service";


@Controller("/user")
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get("/all")
    async getAllUsers(): Promise<User[] | number> {
        return await this.userService.findAll();
    }
}