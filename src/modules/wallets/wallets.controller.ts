import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './wallet.entity';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly entitiesService: WalletsService) {}

  @Post()
  create(@Body() dto: CreateWalletDto): Promise<Wallet> {
    return this.entitiesService.create(dto);
  }

  @Get()
  findAll(): Promise<Wallet[]> {
    return this.entitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Wallet> {
    return this.entitiesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.entitiesService.remove(id);
  }
}
