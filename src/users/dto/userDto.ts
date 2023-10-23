import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, IsNotEmpty, IsEmail } from "class-validator";

export class UserDto {
    
    @ApiProperty({
        example: 'Asif',
    })
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 'asif26.baust@gmail.com',
    })
    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide a valid Email.' })    
    @ApiProperty()
    email: string;

    @ApiProperty({
        example: 'Software Engineer',
    })
    @ApiProperty({
        example: 'Software Engineer',
    })
    @IsString()
    @IsNotEmpty()
    designation: string;
}