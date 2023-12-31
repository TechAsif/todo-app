import { ApiProperty } from "@nestjs/swagger";
import { TodoDto } from "./todoDto";
import { UserResponseDto } from "src/users/dto/userResponseDto";

export class TodoResponseDto extends TodoDto {
    @ApiProperty({
        example: 1,
    })
    id: number;

    @ApiProperty({
        example: new Date().toISOString(),
    })
    createdAt: number;

    @ApiProperty({
        type: UserResponseDto,
    })
    user: UserResponseDto;

  }