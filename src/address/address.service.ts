import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Address} from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async findAllAddress(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOneAddress(id: number): Promise<Address> {
    return this.addressRepository.findOneBy({ id });
  }

  async createAddress(address: Address): Promise<Address> {
    return this.addressRepository.save(address);
  }

  async updateAddress(id: number, address: Address): Promise<Address> {
    await this.addressRepository.update(id, address);
    return this.addressRepository.findOneBy( { id } );
  }

  async delete(id: number): Promise<void> {
    await this.addressRepository.delete(id);
  }
}