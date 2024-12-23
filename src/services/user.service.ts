import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/database/entity/user.entity';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { CreateUserResponseDto } from 'src/dtos/CreateUserResponseDto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {

    const findOneUSer: User = await this.userRepository.findOne({
        where: {
            email: createUserDto.email
        }
    })

    if(findOneUSer !== null) {
        return null;
    }

    const newUser = this.userRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      lastname: createUserDto.lastname,
    });


    await this.userRepository.save(newUser);

    const response : CreateUserResponseDto = {
      lastname: newUser.lastname,
      name: newUser.name
    }
    return response

  }
}