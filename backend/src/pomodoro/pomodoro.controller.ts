import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, HttpCode, Put } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { PomodoroDto, PomodoroRoundDto } from './dto/pomodoro.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user/timer')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId: string) {
    return this.pomodoroService.getTodaySession(userId)
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId: string) {
    return this.pomodoroService.create(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(@Body() dto: PomodoroRoundDto, @Param('id') id: string) {
    return this.pomodoroService.updateRound(dto, id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/session/:id')
  @Auth()
  async update(
    @Body() dto: PomodoroDto, 
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.pomodoroService.update(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.pomodoroService.deleteSession(id, userId)
  }
}
