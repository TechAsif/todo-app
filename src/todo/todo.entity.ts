import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne,  } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    public id: number;
   
    @Column()
    title: string;
  
    @Column({ nullable: true }) 
    description: string;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    public userId: number;

    @ManyToOne(() => User, user => user.todos, {onDelete: 'SET NULL'})
    @JoinColumn()
    user: User;
}