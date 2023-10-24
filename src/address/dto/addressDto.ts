import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class AddressDto {

    @ApiProperty({
        example: '15 A',
    })
    street: string;
   
    @ApiProperty({
        example: 'Dhaka',
    })
    @IsString()
    @IsNotEmpty({ message: 'Division Can not be empty' })
    division: string;
   
    @ApiProperty({
        example: 'Bangladesh',
    })
    @IsString()
    @IsNotEmpty({ message: 'Country Can not be empty' })
    country: string;

    @ApiProperty({
        example: 1,
    })
    @IsNumber()
    userId: number

}