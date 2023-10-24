import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddressResponseDto } from './dto/addressResponseDto';
import { AddressDto } from './dto/addressDto';

@Controller('address')
@ApiTags('Address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  //get all Address
  @Get()
  @ApiResponse({ status: 200, type: [AddressResponseDto]})
  async findAll(): Promise<Address[]> {
    return this.addressService.findAllAddress();
  }

  //get Address by id
  @Get(':id')
  @ApiResponse({ status: 200, type: AddressResponseDto})
  async findOne(@Param('id') id: number): Promise<Address> {
    const address = await this.addressService.findOneAddress(id);
    if (!address) {
      throw new NotFoundException('Address does not exist!');
    } else {
      return address;
    }
  }

  //create Address
  @Post()
  @ApiResponse({ status: 201, type: AddressResponseDto})
  @ApiBody({type: AddressDto})
  async create(@Body() address: AddressDto): Promise<Address> {
    return this.addressService.createAddress(address);
  }

  //update address
  @Put(':id')
  @ApiResponse({ status: 200, type: AddressResponseDto})
  async update (@Param('id') id: number, @Body() address: Address): Promise<any> {
    return this.addressService.updateAddress(id, address);
  }

  //delete address
  @Delete(':id')
  @ApiResponse({ status: 200})
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if address does not exist
    const address = await this.addressService.findOneAddress(id);
    if (!address) {
      throw new NotFoundException('address does not exist!');
    }
    return this.addressService.delete(id);
  }
}