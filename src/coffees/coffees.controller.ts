import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: any) {
    //const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.coffeesService.create(body);
    // return `This action creates a coffee`;
  }

  @Patch(':id')
  updateCoffees(@Body() body: any, @Param('id') id: string) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  deleteCoffees(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
