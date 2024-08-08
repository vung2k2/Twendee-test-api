import { Module } from '@nestjs/common';
import { RandomUserService } from './randomuser.service';
import { RandomUserController } from './randomuser.controller';

@Module({
  controllers: [RandomUserController],
  providers: [RandomUserService],
})
export class RandomuserModule {}
