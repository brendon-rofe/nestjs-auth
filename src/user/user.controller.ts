import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { UserUpdate } from "./update-user.dto";

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

  @Get(':id')
  getOneUser(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.userService.getOneUser({ where: { id } });
  }

  @Put(':id')
  updateUser(@Param('id', new ParseIntPipe()) id: number,
  @Body() updates: UserUpdate): Promise<User> {
    return this.userService.updateUser(id, updates);
  }

  @Delete(':id')
  deleteUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.deleteUser(id);
  }

  @Post(':id')
  restoreUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.restoreUser(id);
  }

}