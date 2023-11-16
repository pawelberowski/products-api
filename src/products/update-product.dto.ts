import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  name?: string;

  @IsNumber()
  @IsNotEmpty()
  @CanBeUndefined()
  price?: number;

  @IsBoolean()
  @IsNotEmpty()
  @CanBeUndefined()
  isInStock?: boolean;
}
