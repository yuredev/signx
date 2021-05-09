import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
class User {
  
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;
}

export default User;
