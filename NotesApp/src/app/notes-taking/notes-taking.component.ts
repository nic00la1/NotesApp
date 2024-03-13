import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notes-taking',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './notes-taking.component.html',
  styleUrl: './notes-taking.component.css',
})
export class NotesTakingComponent {

  addNote(title: string, content: string) {
    // Add a new note to the notes array

    if (!title || !content) {
      alert('Wszystkie pola muszą być wypełnione!');
      return;
    }

    

  }
}
