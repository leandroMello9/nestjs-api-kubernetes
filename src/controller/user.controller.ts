import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { User } from "src/database/entity/user.entity";
import { CreateUserDto } from "src/dtos/CreateUserDto";
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

    @Post("/create")
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {

        const newUSer = await this.userService.create(createUserDto);

        if(newUSer === null) {
            return res.status(400).json({
                error: "User already exist!"
            });  
        }
        return res.status(200).json(newUSer); 

    }
}