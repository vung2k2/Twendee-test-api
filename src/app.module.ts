import { Module } from '@nestjs/common';
import { RandomuserModule } from './randomuser/randomuser.module';

@Module({
  imports: [RandomuserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
