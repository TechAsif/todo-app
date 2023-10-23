import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/userDto';
import { UserResponseDto } from './dto/userResponseDto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //get all users
  @Get()
  @ApiResponse({ status: 200, type: [UserResponseDto]})
  async findAll(): Promise<User[]> {
    return this.usersService.findAllUser();
  }

  //get user by id
  @Get(':id')
  @ApiResponse({ status: 200, type: UserResponseDto})
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.findOneUser(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @Post()
  @ApiResponse({ status: 201, type: UserResponseDto})
  @ApiBody({type: UserDto})
  async create(@Body() user: UserDto): Promise<User> {
    return this.usersService.createUser(user);
  }

  //update user
  @Put(':id')
  @ApiResponse({ status: 200, type: UserResponseDto})
  async update (@Param('id') id: number, @Body() user: UserDto): Promise<User> {
    return this.usersService.updateUser(id, user);
  }

  //delete user
  @Delete(':id')
  @ApiResponse({ status: 200})
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOneUser(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(id);
  }
}