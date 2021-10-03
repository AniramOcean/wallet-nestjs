import { Module } from '@nestjs/common';
import { PurchasesController } from '../purchase/purchases.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forRoot()],
  controllers: [PurchasesController],
})
export class AppModule {}
