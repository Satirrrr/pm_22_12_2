import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { ExperienceComponent } from './components/experience/experience';
import { ResumeService } from './services/resume.service';

interface SectionStatus {
  contact: boolean;
  experience: boolean;
  references: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    SidebarComponent,
    ExperienceComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // Ініціалізуємо null, щоб спрацював лоадер в HTML
  data: any = null;
  errorMessage: string = '';

  sectionStatus: SectionStatus = {
    contact: true,
    experience: true,
    references: true
  };

  constructor(
    private resumeService: ResumeService,
    private cdr: ChangeDetectorRef // Додано для вирішення проблеми з нескінченним завантаженням
  ) {}

  ngOnInit(): void {
    this.fetchResume();
  }

  // Завдання 3: Отримання даних через GET-запит
  fetchResume(): void {
    this.resumeService.getResumeData().subscribe({
      next: (response: any) => {
        console.log('Дані успішно отримано:', response);
        this.data = response;
        this.errorMessage = '';

        // Примусово повідомляємо Angular, що дані змінилися
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Помилка сервера:', err);
        this.errorMessage = 'Не вдалося завантажити дані. Перевірте, чи запущено Node.js сервер.';
        this.cdr.detectChanges();
      }
    });
  }

  // Завдання 4: Надсилання даних через POST-запит
  saveResume(): void {
    if (!this.data) return;

    this.resumeService.saveResumeData(this.data).subscribe({
      next: (res: any) => {
        alert('Дані успішно збережено у resume.json!');
      },
      error: (err: any) => {
        alert('Помилка при збереженні: ' + err.message);
      }
    });
  }

  toggleSection(section: keyof SectionStatus): void {
    this.sectionStatus[section] = !this.sectionStatus[section];
    this.cdr.detectChanges();
  }
}
