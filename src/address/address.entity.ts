import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne,  } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    public id: number;
   
    @Column({nullable: true})
    public street: string;
   
    @Column()
    public division: string;
   
    @Column()
    public country: string;

    @OneToOne(() => User, user => user.address, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User;
}