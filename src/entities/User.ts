import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {

  @PrimaryGeneratedColumn()
  user_id: number;

  @Column("text")
  first_name: string;

  @Column("text")
  last_name: string;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

}

export { User }