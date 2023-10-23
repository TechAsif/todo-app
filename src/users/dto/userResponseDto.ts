import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "./userDto";

export class UserResponseDto extends UserDto {
    @ApiProperty({
        example: '1',
    })
    id: number;
  }