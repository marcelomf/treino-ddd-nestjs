import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get('hello')
  findAll(): string {
    return 'Hello World!';
  }
}
