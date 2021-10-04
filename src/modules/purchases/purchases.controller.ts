import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UpdateService } from '../update/update.service';
import { PurchasesService } from './purchases.service';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(
    private purchasesService: PurchasesService,
    private updateService: UpdateService,
  ) {}

  @Get()
  getAll(): Promise<Purchase[]> {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Purchase> {
    return this.purchasesService.findOne(id);
  }

  @Post('update')
  update() {
    this.updateService.subject.next();
  }

  @Post()
  create(@Body() dto: CreatePurchaseDto): Promise<Purchase> {
    return this.purchasesService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.purchasesService.remove(id);
  }
}
