import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export class BaseEntityDataBase {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @CreateDateColumn({ type: 'timestamptz' })
    readonly createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamptz' })
    readonly updatedAt!: Date;
  
  }