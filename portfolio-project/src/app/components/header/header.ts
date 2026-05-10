import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Додай цей імпорт

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule], // Обов'язково додай FormsModule сюди
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  @Input() person: any;
  @Input() isEditing: boolean = false; // Додай цю властивість
}
