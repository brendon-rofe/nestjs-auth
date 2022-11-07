import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { UserService } from "./user.service";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers()
    return users;
  }

}