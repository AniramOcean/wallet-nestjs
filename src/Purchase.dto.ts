import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class PurchaseDTO {
  @Length(40)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Min(10)
  @Max(500000)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  comment: string;
}
