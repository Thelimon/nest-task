/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, HttpStatus, Res, Query, Logger, Body } from '@nestjs/common';
import  {Response} from 'express';

@Controller('endpoints')
export class EndpointsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
   @Get()
  public get(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'get',
      query,
    });
  }

  @Post()
  public post(@Query() query: any, @Body() body: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.CREATED).send({
      nombre: 'Post',
      query,
      body,
    });
  }

  @Put()
  public put(@Query() query: any, @Body() body: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'Put',
      query,
      body,
    });
  }
  
  @Delete()
  public delete(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'Delete',
      query,
    });
  }
}

