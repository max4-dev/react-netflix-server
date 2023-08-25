import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from 'src/auth/localauth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  SignupResponse,
} from './types';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: SignupResponse })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiBody({type: LoginUserRequest})
  @ApiOkResponse({type: LoginUserResponse})
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('Content-type', 'application/json')
  login(@Request() req) {
    req.session.authenticated = true;
    req.session.user = req.user;
    return {user: req.user, message: 'Logged in'}
  }

  @ApiOkResponse({type: LoginCheckResponse})
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  @Header('Content-type', 'application/json')
  loginCheck(@Request() req) {
    return req.user
  }

  @ApiOkResponse({type: LoginUserResponse})
  @Get('/logout')
  @Header('Content-type', 'application/json')
  logOut(@Request() req) {
    req.session.destroy();
    return {message: 'session has ended'}
  }

  @Get()
  @Header('Content-type', 'application/json')
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  @Header('Content-type', 'application/json')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}
