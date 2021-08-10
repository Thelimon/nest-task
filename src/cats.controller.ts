import { Controller, Get, Post, Put, Delete, HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  public get() {
    return { name: 'GET' };
  }

  @Post()
  @HttpCode(201)
  public post() {
    return { name: 'POST' };
  }

  @Put()
  @HttpCode(200)
  public put() {
    return { name: 'PUT' };
  }

  @Delete()
  @HttpCode(200)
  public delete() {
    return { name: 'DELETE' };
  }
}
