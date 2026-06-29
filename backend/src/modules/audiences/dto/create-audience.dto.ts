import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateAudienceDto {
  @IsString()
  @IsNotEmpty({ message: 'Название аудитории не заполнено' })
  name!: string;

  @IsArray()
  @IsString({ each: true })
  docIds!: string[];
}
