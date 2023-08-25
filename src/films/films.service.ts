import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './films.model';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Film)
    private filmModel: typeof Film,
  ) {}

  async create(filmData): Promise<Film> {
    return this.filmModel.create(filmData);
  }

  async findAll(): Promise<Film[]> {
    return this.filmModel.findAll();
  }

  async findById(id: number): Promise<Film> {
    return this.filmModel.findByPk(id);
  }

  async deleteById(id: number): Promise<number> {
    const result = await this.filmModel.destroy({ where: { id } });
    return result;
  }
}