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
    const id = this.notes.length + 1; // or however you generate ids
    const date = new Date();
    const newNote = new Note(id, title, content, date);
    
    // Add the new note to the list
    this.notes.push(newNote);
  }
}

