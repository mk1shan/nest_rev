import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcomesecure notes api';
  }


getTestMessage(){
  return 'hello mudipqa'
}


getNotes()
{
  return[{
    id:1,
    title:'learn nest js',
    content:"we are doing" }
  ]
}




}
