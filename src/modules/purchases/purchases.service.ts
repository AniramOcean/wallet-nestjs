import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private readonly entityRepository: Repository<Purchase>,
  ) {}

  create(createUserDto: CreatePurchaseDto): Promise<Purchase> {
    const purchase = new Purchase();

    purchase.color = createUserDto.color;
    purchase.comment = createUserDto.comment;
    purchase.date = createUserDto.date;
    purchase.price = createUserDto.price;
    purchase.title = createUserDto.title;

    return this.entityRepository.save(purchase);
  }

  async findAll(): Promise<Purchase[]> {
    return this.entityRepository.find();
  }

  findOne(id: string): Promise<Purchase> {
    return this.entityRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.entityRepository.delete(id);
  }
}
