import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "./userDto";
import { AddressResponseDto } from "src/address/dto/addressResponseDto";
import { TodoResponseDto } from "src/todo/dto/todoResponseDto";

export class UserResponseDtoInternal extends UserDto {
    @ApiProperty({
        example: '1',
    })
    id: number;

    @ApiProperty({
        type: AddressResponseDto,
    })
    address: AddressResponseDto;

    @ApiProperty({
        type: [TodoResponseDto],
    })
    todos: TodoResponseDto[];
  }