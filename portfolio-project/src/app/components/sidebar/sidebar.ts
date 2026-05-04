import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None //
})
export class SidebarComponent {
  @Input() aboutMe: string = '';
  @Input() education: any[] = [];
  @Input() skills: any[] = [];

  getStars(level: number): string {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  }
}
