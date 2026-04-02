import { Controller, Get, Param } from '@nestjs/common';
import { NotesService } from './notes.service'; 

@Controller('notes')
export class NotesController {



constructor(private readonly notesservice:NotesService){}


@Get()
getAllNotes(){
return this.notesservice.getAllNotes();
}

@Get('welcome')
getwelocmenotes(){
return "welocme to notes";
}

@Get('stats')
getstats(){
return this.notesservice.getNoteStats();
}


@Get(':id')
getNoteById(@Param('id') id:string){
 return this.notesservice.getNoteById(id);
}

}

