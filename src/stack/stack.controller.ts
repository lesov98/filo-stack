import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { StackService } from './stack.service';
import { Response } from 'express';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Post()
  push(@Body('value') value: number, @Res() res: Response) {
    this.stackService.push(value);
    res.status(204).send();
  }

  @Delete()
  pop(@Res() res: Response) {
    this.stackService.pop();
    res.status(204).send();
  }

  @Get()
  findAll(): number[] {
    return this.stackService.findAll();
  }

  @Delete('clear')
  clear(@Res() res: Response) {
    this.stackService.clear();
    res.status(204).send();
  }
}
