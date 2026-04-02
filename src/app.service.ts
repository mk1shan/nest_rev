import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloMessage() {
    return 'Hello Mudipa';
  }

  getTestMessage() {
    return 'This is test route';
  }

  getProfile() {
    return {
      name: 'Mudipa',
      role: 'Backend Learner',
      level: 'Beginner',
    };
  }

  getAbout() {
    return {
      project: 'Secure Notes API',
      version: '1.0.0',
      status: 'Learning backend step by step',
    };
  }

  getSkills() {
    return ['NestJS', 'Routing', 'Controllers', 'Services'];
  }
}
