import { Address } from "src/address/address.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne,  } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    designation: string;

    @OneToOne(() => Address, address => address.user)
    address: Address;
}