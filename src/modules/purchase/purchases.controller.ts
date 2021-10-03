import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Purchase } from '../../models/Purchase';
import { PurchaseDTO } from '../../models/Purchase.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private purchaseService: InMemoryDBService<Purchase>) {}

  @Get()
  getAll(): Purchase[] {
    return this.purchaseService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Purchase {
    return this.purchaseService.get(id);
  }

  @Post('seed')
  seed(): Purchase[] {
    const day = new Date(Date.now()).getDate();
    const month = new Date(Date.now()).getMonth();
    const year = new Date(Date.now()).getFullYear();
    const recordFactory = (idx: number): Partial<Purchase> => ({
      id: `${idx}`,
      title: `Title-${idx}`,
      price: Number(`${idx * 100 - idx * 10 + idx / 2}`),
      date: `${day - +idx}-${month}-${year}`,
      comment: `Awesome comment here!`,
    });

    this.purchaseService.seed(recordFactory, 5);

    return this.purchaseService.getAll();
  }

  @Post()
  create(@Body() model: PurchaseDTO): Purchase {
    return this.purchaseService.create(model);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.purchaseService.delete(id);
  }
}
