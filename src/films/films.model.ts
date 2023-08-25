import { AutoIncrement, Column, DataType, Model, ModelCtor, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Film extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column
  title: string;

  @Column
  descr: string;

  @Column
  imgs: string;

  @Column
  tag: string;
  
  @Column
  images: string;

  @Column
  tags: string;
  
  @Column
  rating: number;

  @Column
  filmLink: string;

  @Column
  language: string;
}

export type FilmModel = ModelCtor<Film>;