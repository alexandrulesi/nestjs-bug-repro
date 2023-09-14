import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CountryDto } from 'src/country.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: CountryDto })
  getHello() {
    return;
  }
}
