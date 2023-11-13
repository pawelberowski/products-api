import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @CanBeUndefined()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @CanBeUndefined()
  quantity: number;
}
