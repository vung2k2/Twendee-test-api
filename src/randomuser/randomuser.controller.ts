import { Controller, Get, Query } from '@nestjs/common';
import { RandomUserService } from './randomuser.service';

@Controller('randomuser')
export class RandomUserController {
  constructor(private readonly randomUserService: RandomUserService) {}

  @Get()
  getRandomUser(
    @Query('gender') gender: string,
    @Query('nat') nat: string,
    @Query('inc') inc: string,
    @Query('exc') exc: string,
    @Query('format') format: string,
  ) {
    let user = this.randomUserService.generateRandomUser();
    user = this.randomUserService.filterUsers([user], gender, nat, inc, exc)[0];
    user = this.randomUserService.convertToFormat(user, format);
    return user;
  }

  @Get('list')
  getRandomUsers(
    @Query('count') count: string,
    @Query('gender') gender: string,
    @Query('nat') nat: string,
    @Query('inc') inc: string,
    @Query('exc') exc: string,
  ) {
    const userCount = parseInt(count, 10) || 1;
    let users = this.randomUserService.generateRandomUsers(userCount);
    users = this.randomUserService.filterUsers(users, gender, nat, inc, exc);

    return users;
  }
}
