import { ApiProperty } from "@nestjs/swagger";
import { AddressDto } from "./addressDto";
import { UserResponseDto } from "src/users/dto/userResponseDto";

export class AddressResponseDto extends AddressDto {
    @ApiProperty({
        example: 1,
    })
    id: number;

    @ApiProperty({
        type: UserResponseDto,
    })
    user: UserResponseDto;
  }