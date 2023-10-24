import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './user.entity';
import { UserDto } from './dto/userDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllUser(): Promise<User[]> {
    return this.userRepository.find({relations: ['address','todos']});
  }

  async findOneUser(id: number): Promise<User> {
    return this.userRepository.findOne({where: {id}, relations: ['address','todos']});
  }

  async createUser(user: UserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(id: number, user: UserDto): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({where: {id}, relations: ['address','todos']});
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}