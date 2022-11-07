import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";
import { CreateUserDto } from "./user.dto";
import { User } from "./user.entity";


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  
  async createUser(data: Partial<User>): Promise<User> {
    const user = await this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.createQueryBuilder('users').getMany()
  }
}