import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Purchase } from '../purchases/purchase.entity';
import { User } from '../users/user.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Purchase, (entity) => entity.wallet)
  purchases: Purchase[];

  @ManyToOne(() => User, (entity) => entity.wallets)
  user: User;
}
