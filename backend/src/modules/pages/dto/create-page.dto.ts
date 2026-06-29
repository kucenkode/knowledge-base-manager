import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePageDto {
  @IsString()
  @IsNotEmpty({ message: 'Название страницы не заполнено' })
  name!: string;

  @IsArray()
  @IsString({ each: true })
  audienceIds!: string[];
}
