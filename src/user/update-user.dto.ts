import { IsNotEmpty, IsString } from "class-validator";


export class UserUpdate {
  @IsString()
  @IsNotEmpty()
  readonly name;
}