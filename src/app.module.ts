import { Module } from '@nestjs/common';
import { StackModule } from './stack/stack.module';

@Module({
  imports: [StackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
