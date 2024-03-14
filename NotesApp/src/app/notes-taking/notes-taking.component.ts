import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes-taking',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './notes-taking.component.html',
  styleUrl: './notes-taking.component.css',
})
export class NotesTakingComponent {
  notes: Note[] = [];
  
  addNote(title: string, content: string) {
    if (!title.trim() || !content.trim()) {
      // Don't add the note if title or content are empty
      alert('Wszystkie pola musza byc wypelnione!');
      return;
    }
  
    const id = this.notes.length + 1; // or however you generate ids
    const date = new Date();
    const newNote = new Note(id, title, content, date);
    
    // Add the new note to the list
    this.notes.push(newNote);
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n !== note);
  }

  editNote(note: Note, title: string, content: string) {
    note.title = title; 
    note.content = content; // 

    const updatedNotes = [...this.notes]; // copy the array
    const newTitle = prompt('Wprowadz nowa nazwe:');
    const newContent = prompt('Wprowadz nowy opis:');

    if (newTitle && newContent) { // if the user didn't cancel
      note.title = newTitle;
      note.content = newContent;

      const index = updatedNotes.findIndex(n => n === note);
      if (index !== -1) {
        const updatedNote = { ...note, title: newTitle, content: newContent };
        updatedNotes[index] = updatedNote;
        this.notes = updatedNotes;
      }
    }
   
  }
}

