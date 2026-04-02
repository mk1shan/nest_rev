import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello() {
    return this.appService.getHelloMessage();
  }

  @Get('test')
  test() {
    return this.appService.getTestMessage();
  }

  @Get('profile')
  profile() {
    return this.appService.getProfile();
  }

  @Get('about')
  about() {
    return this.appService.getAbout();
  }

  @Get('skills')
  skills() {
    return this.appService.getSkills();
  }
}
