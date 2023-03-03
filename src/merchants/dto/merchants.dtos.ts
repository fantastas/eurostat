import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateMerchantDto {
  @IsNotEmpty()
  @MinLength(3)
  ParentName: string;

  @IsNotEmpty()
  @MinLength(8)
  GrandParent: string;
}
