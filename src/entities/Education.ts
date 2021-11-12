import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('education')
class Education {

  @PrimaryGeneratedColumn()
  education_id: number;

  @Column("int")
  employee_id: number;

  @Column("text")
  institute: string;

  @Column("text")
  graduation_year: string;

  @Column("text")
  grade: string;

}

export { Education }