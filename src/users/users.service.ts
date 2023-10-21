import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOneBy( { id } );
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}