import {
<<<<<<< HEAD
=======
  IsDate,
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;
  //los decoradores en el dto validan que la informacion agregada sea correcta

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsString()
  @IsOptional()
  filename: string;

  @IsDateString()
  @IsOptional()
  created_at: string;
<<<<<<< HEAD

=======
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
}
