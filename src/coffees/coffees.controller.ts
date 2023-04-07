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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery: any) {
    const { limit, offset } = paginationQuery;
    return `this action returns all coffees, limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
    // return `This action creates a coffee`;
  }

  @Patch(':id')
  updateCoffees(@Body() body: any, @Param('id') id: string) {
    return `This action updates ${id} coffee `;
  }

  @Delete(':id')
  deleteCoffees(@Param('id') id: string) {
    return `This action deletes ${id} coffee`;
  }
}
