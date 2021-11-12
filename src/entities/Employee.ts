import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
class Employee {

  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column("text")
  first_name: string;

  @Column("text")
  last_name: string;

  @Column("text")
  cnic: string;

  @Column("text")
  dob: string;

  @Column("text")
  current_address: string;

  @Column("text")
  permanent_address: string;

  @Column("text")
  father_name: string;

  @Column("text")
  gender: string;

  @Column("text")
  domicile: string;

  @Column("text")
  designation: string;

  @Column("text")
  date_of_joining: string;

  @Column("text")
  employment_status: string;

  @Column("text")
  remarks: string;

  @Column("text")
  salary: string;

}

export { Employee }