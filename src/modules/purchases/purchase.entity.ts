import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from '../wallets/wallet.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  date: Date;

  @Column()
  comment: string;

  @Column()
  color: string;

  @ManyToOne(() => Wallet, (entity) => entity.purchases)
  wallet: Wallet;
}
