import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFilmDto {
  @ApiProperty({ example: 'Film Name' })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ example: 'Description about Film' })
  @IsNotEmpty()
  readonly descr: string;

  @ApiProperty({ example: '4' })
  @IsNotEmpty()
  readonly raiting: string;

  @ApiProperty({
    example: [
      'https://i.pinimg.com/originals/1c/d4/c9/1cd4c97e136ccc6e70d2a657f5eb4c27.jpg',
      'https://i.pinimg.com/originals/1c/d4/c9/1cd4c97e136ccc6e70d2a657f5eb4c27.jpg',
      'https://i.pinimg.com/originals/1c/d4/c9/1cd4c97e136ccc6e70d2a657f5eb4c27.jpg',
    ],
  })
  readonly images: string;

  @ApiProperty({ example: 'RU' })
  @IsNotEmpty()
  readonly language: string;

  @ApiProperty({ example: ['Science Fiction', 'Fantasy'] })
  @IsNotEmpty()
  readonly tags: string[];
}