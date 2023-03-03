import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMerchantDto } from './dto/merchants.dtos';
import { MerchantsService } from './merchants.service';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantService: MerchantsService) {}

  @Get()
  getUsers() {
    return this.merchantService.getMerchants();
  }

  //   @Get('id/:id')
  //   findUsersById(@Param('id', ParseIntPipe) id: number) {
  //     return this.userService.findUsersById(id);
  //   }

  //   @Post('create')
  //   @UsePipes(ValidationPipe)
  //   createUsers(@Body() createUserDto: CreateUserDto) {
  //     return this.userService.createUser(createUserDto);
  //   }
}
