import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly entitiesRepository: Repository<Wallet>,
  ) {}

  create(createUserDto: CreateWalletDto): Promise<Wallet> {
    const wallet = new Wallet();

    wallet.title = createUserDto.title;

    return this.entitiesRepository.save(wallet);
  }

  async findAll(): Promise<Wallet[]> {
    return this.entitiesRepository.find();
  }

  findOne(id: string): Promise<Wallet> {
    return this.entitiesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.entitiesRepository.delete(id);
  }
}
