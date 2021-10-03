import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [],
  controllers: [PurchasesController],
  providers: [InMemoryDBService],
})
export class PurchasesModule {}
