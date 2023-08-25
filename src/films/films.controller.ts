import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from './films.model';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  async create(@Body() filmData): Promise<Film> {
    return this.filmsService.create(filmData);
  }

  @Get()
  async findAll(): Promise<Film[]> {
    return this.filmsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Film> {
    return this.filmsService.findById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<number> {
    return this.filmsService.deleteById(id);
  }
}