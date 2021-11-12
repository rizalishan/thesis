import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('experience')
class Experience {

  @PrimaryGeneratedColumn()
  experience_id: number;

  @Column("int")
  employee_id: number;

  @Column("text")
  company: string;

  @Column("text")
  designation: string;

  @Column("text")
  start_date: string;

  @Column("text")
  end_date: string;
}

export { Experience }