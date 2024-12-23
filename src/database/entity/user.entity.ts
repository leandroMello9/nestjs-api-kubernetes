import { Column, Entity } from "typeorm";
import { BaseEntityDataBase } from "../base.entity";

@Entity()
export class User extends BaseEntityDataBase {

    @Column({ length: 500 })
    name: string;
  
    @Column('text')
    lastname: string;
  
    @Column()
    email: string;
  
    @Column('text')
    password: string; 
    
}