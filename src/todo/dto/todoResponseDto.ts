import { ApiProperty } from "@nestjs/swagger";
import { TodoDto } from "./todoDto";

export class TodoResponseDto extends TodoDto {
    @ApiProperty({
        example: 1,
    })
    id: number;

    @ApiProperty({
        example: new Date().toISOString(),
    })
    createdAt: number;

  }