import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';

@Module({
  providers: [StackService],
  controllers: [StackController],
})
export class StackModule {}
