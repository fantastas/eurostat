import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateMerchantDto } from './dto/merchants.dtos';

@Injectable()
export class MerchantsService {
  constructor(
    @InjectRepository(Merchant)
    private readonly merchantRepository: Repository<Merchant>,
  ) {}

  createMerchant(createMerchantDto: CreateMerchantDto) {
    const newMerchant = this.merchantRepository.create(createMerchantDto);
    return this.merchantRepository.save(newMerchant);
  }

  findUsersByPsrent(parentName: string) {
    return this.merchantRepository.find({
      where: [{ ParentName: parentName }],
    });
  }
  getMerchants() {
    return this.merchantRepository.find();
  }
}
