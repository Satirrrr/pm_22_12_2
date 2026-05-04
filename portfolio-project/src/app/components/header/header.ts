import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  // Дані приходять з app.html через [person]="data.person"
  @Input() person: any;

  constructor(private cdr: ChangeDetectorRef) {}

  // Метод для оновлення, якщо дані зміняться динамічно
  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
