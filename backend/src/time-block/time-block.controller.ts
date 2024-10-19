import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Put, HttpCode } from '@nestjs/common';
import { TimeBlockService } from './time-block.service';
import { TimeBlockDto } from './dto/time-block.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UpdateOrderDto } from './dto/update-oreder.dto';

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.timeBlockService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId: string,@Body() dto: TimeBlockDto) {
    return this.timeBlockService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @Put('update-order')
  @Auth()
  async updateOrder(@Body() updateOrderDto: UpdateOrderDto) {
    return this.timeBlockService.updateOrder(updateOrderDto.ids)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.timeBlockService.update(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.timeBlockService.delete(id, userId)
  }
}
