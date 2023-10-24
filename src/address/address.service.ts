import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Address} from './address.entity';
import { AddressDto } from './dto/addressDto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async findAllAddress(): Promise<Address[]> {
    return this.addressRepository.find({relations: ['user']});
  }

  async findOneAddress(id: number): Promise<Address> {
    return this.addressRepository.findOne({where: {id}, relations: ['user']});
  }

  async createAddress(address: AddressDto): Promise<Address> {
    return this.addressRepository.save(address);
  }

  async updateAddress(id: number, address: AddressDto): Promise<Address> {
    await this.addressRepository.update(id, address);
    return this.addressRepository.findOne({where: {id}, relations: ['user']});
  }

  async delete(id: number): Promise<void> {
    await this.addressRepository.delete(id);
  }
}