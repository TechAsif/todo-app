import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class TodoDto {

    @ApiProperty({
        example: 'UI/UX Design',
    })
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    title: string;
   
    @ApiProperty({
        example: 'UI/Ux Design for Gmail UI',
    })
    description: string;
   

    @ApiProperty({
        example: 1,
    })
    @IsNumber()
    userId: number

}