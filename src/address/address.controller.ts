import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('address')
@ApiTags('Address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  //get all Address
  @Get()
  async findAll(): Promise<Address[]> {
    return this.addressService.findAllAddress();
  }

  //get user by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Address> {
    const user = await this.addressService.findOneAddress(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @Post()
  async create(@Body() user: Address): Promise<Address> {
    return this.addressService.createAddress(user);
  }

  //update user
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: Address): Promise<any> {
    return this.addressService.updateAddress(id, user);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.addressService.findOneAddress(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.addressService.delete(id);
  }
}