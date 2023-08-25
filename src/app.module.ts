import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { SessionSerializer } from './auth/session.serializer';
import { FilmsModule } from './films/films.module';
import { Film } from './films/films.model';
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService
    }),
    ConfigModule.forRoot({
      load: [databaseConfig]
    }),
    UsersModule,
    AuthModule,
    FilmsModule,
  ],
  providers: [SessionSerializer],
})
export class AppModule {}
