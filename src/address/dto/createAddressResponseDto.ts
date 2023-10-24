import { ApiProperty } from "@nestjs/swagger";
import { AddressDto } from "./addressDto";

export class CreateAddressResponseDto extends AddressDto {
    @ApiProperty({
        example: 1,
    })
    id: number;
  }