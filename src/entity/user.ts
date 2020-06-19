import { Entity,PrimaryGeneratedColumn,Column  } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  username: string;

  @Column({
    length: 100
  })
  password: string;
}