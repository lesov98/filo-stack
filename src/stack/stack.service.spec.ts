import { Test, TestingModule } from '@nestjs/testing';
import { StackService } from './stack.service';

describe('StackService', () => {
  let service: StackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackService],
    }).compile();

    service = module.get<StackService>(StackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should push an item to the stack', () => {
    service.push(5);
    expect(service.findAll()).toEqual([5]);
  });

  it('should pop an item from the stack', () => {
    service.push(5);
    const poppedValue = service.pop();
    expect(poppedValue).toEqual(5);
  });

  it('should clear the stack', () => {
    service.push(5);
    service.push(10);
    service.clear();
    expect(service.findAll()).toEqual([]);
  });
});
