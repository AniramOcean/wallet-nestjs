import { Module } from '@nestjs/common';
import { PurchasesModule } from '../purchases/purchases.module';
import { CometModule } from '../comet/comet.module';
import { UpdateService } from '../update/update.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PurchasesModule,
    WalletsModule,
    CometModule,
    UsersModule,
  ],
  providers: [UpdateService],
})
export class AppModule {}
