import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoResponseDto } from './dto/todoResponseDto';
import { TodoDto } from './dto/todoDto';

@Controller('todos')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //get all Todo
  @Get()
  @ApiResponse({ status: 200, type: [TodoResponseDto]})
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAllTodo();
  }

  //get todo by id
  @Get(':id')
  @ApiResponse({ status: 200, type: TodoResponseDto})
  async findOne(@Param('id') id: number): Promise<Todo> {
    const todo = await this.todoService.findOneTodo(id);
    if (!todo) {
      throw new NotFoundException('Todo does not exist!');
    } else {
      return todo;
    }
  }

  //create Todo
  @Post()
  @ApiResponse({ status: 201, type: TodoResponseDto})
  @ApiBody({type: TodoDto})
  async create(@Body() todo: TodoDto): Promise<Todo> {
    return this.todoService.createTodo(todo);
  }

  //update Todo
  @Put(':id')
  @ApiResponse({ status: 200, type: TodoResponseDto})
  async update (@Param('id') id: number, @Body() todo: TodoDto): Promise<Todo> {
    return this.todoService.updateTodo(id, todo);
  }

  //delete Todo
  @Delete(':id')
  @ApiResponse({ status: 200})
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if todo does not exist
    const todo = await this.todoService.findOneTodo(id);
    if (!todo) {
      throw new NotFoundException('Todo does not exist!');
    }
    return this.todoService.delete(id);
  }
}