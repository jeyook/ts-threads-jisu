import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ type: "varchar", length: 200 })
  nickname: string;

  @Column({ type: "varchar", length: 200 })
  password: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  birthday: Timestamp;

  @Column({ type: "varchar", length: 2000 })
  profileImage: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
