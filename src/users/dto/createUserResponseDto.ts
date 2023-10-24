import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "./userDto";

export class CreateUserResponseDto extends UserDto {
    @ApiProperty({
        example: '1',
    })
    id: number;
  }