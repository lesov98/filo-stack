import { Injectable } from '@nestjs/common';

@Injectable()
export class StackService {
  private stack: number[] = [];

  push(number: number): void {
    this.stack.push(number);
  }

  pop(): number | null {
    return this.stack.pop() || null;
  }

  findAll(): number[] {
    return this.stack;
  }

  clear(): void {
    this.stack = [];
  }
}
