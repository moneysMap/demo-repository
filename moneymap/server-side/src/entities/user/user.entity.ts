import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";




@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ name: 'name', type: 'varchar'})
  name!: string;

  @Column({ name: 'email', unique: true })
  email!: string;

  @Column({ name: 'password', type: 'varchar' })
  password!: string;
}