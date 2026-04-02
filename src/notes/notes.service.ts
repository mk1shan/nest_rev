import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  private notes = [
    {
      id: 1,
      title: 'Learn NestJS',
      content: 'Start from small steps',
    },
    {
      id: 2,
      title: 'Backend practice',
      content: 'Build APIs every day',
    },
    {
      id: 3,
      title: 'Interview prep',
      content: 'Practice theory and coding',
    },
  ];

  getAllNotes() {
    return this.notes;
  }

  getNoteStats() {
    return {
      total: this.notes.length,
      published: this.notes.length,
      draft: 0,
    };
  }

  getNoteById(id: string) {
    const note = this.notes.find((note) => note.id === Number(id));

    if (!note) {
      return {
        message: 'Note not found',
      };
    }

    return note;
  }

  createNote(body: any) {
    const newNote = {
      id: this.notes.length + 1,
      title: body.title,
      content: body.content,
    };

    this.notes.push(newNote);

    return {
      message: 'Note created successfully',
      note: newNote,
    };
  }
}
