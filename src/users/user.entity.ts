import { Address } from "src/address/address.entity";
import { Todo } from "src/todo/todo.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany,  } from "typeorm";

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

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[];
}