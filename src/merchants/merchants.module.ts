import { Module } from '@nestjs/common';
import { MerchantsController } from './merchants.controller';
import { MerchantsService } from './merchants.service';
import { Merchant } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MerchantsController],
  providers: [MerchantsService],
  imports: [TypeOrmModule.forFeature([Merchant])],
})
export class MerchantsModule {}
