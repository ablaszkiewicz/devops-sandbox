import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  private counter = 0;

  @Get('/counter')
  getCounter() {
    return {
      count: this.counter,
    };
  }

  @Post('/counter')
  incrementCounter() {
    this.counter++;
    return {
      count: this.counter,
    };
  }
}
