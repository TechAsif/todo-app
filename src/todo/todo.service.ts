import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Todo} from './todo.entity';
import { TodoDto } from './dto/todoDto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAllTodo(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOneTodo(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async createTodo(todo: TodoDto): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async updateTodo(id: number, todo: TodoDto): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return this.todoRepository.findOneBy( { id } );
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}