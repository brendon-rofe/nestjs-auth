import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository, UpdateResult } from "typeorm";
import { User } from "./user.entity";
import { UserUpdate } from "./update-user.dto";


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

  getOneUser(where: FindOneOptions<User>): Promise<User> {
    const user = this.userRepository.findOne(where);
    return user;
  }

  async updateUser(id: number, update: UserUpdate): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    this.userRepository.merge(user, update);
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.softDelete(id);
  }

}