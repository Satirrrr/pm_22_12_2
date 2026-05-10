import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Обов'язково для [(ngModel)]
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { ExperienceComponent } from './components/experience/experience';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SidebarComponent
    // ExperienceComponent можна видалити, якщо тег <app-experience> не використовується
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  data: any = null;
  isEditing: boolean = false; // Керує режимом редагування

  constructor(
    private resumeService: ResumeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchResume();
  }

  fetchResume(): void {
    this.resumeService.getResumeData().subscribe({
      next: (res: any) => {
        this.data = res;
        this.cdr.detectChanges();
      }
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveResume(): void {
    this.resumeService.saveResumeData(this.data).subscribe({
      next: (response) => {
        console.log(response.message);
        alert('Зміни зафіксовані у resume.json!');
        this.isEditing = false; // Вимикаємо режим редагування
      },
      error: (err) => {
        console.error(err);
        alert('Не вдалося зберегти дані на сервері.');
      }
    });
  }
}
