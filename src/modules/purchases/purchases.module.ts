import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';
import { UpdateModule } from '../update/update.module';
import { PurchasesService } from './purchases.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './purchase.entity';

@Module({
  imports: [UpdateModule, TypeOrmModule.forFeature([Purchase])],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
