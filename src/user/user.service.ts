import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class UserService {
  
  findOne() {
    const response = "This will return a single user";
    return response;
  }

}