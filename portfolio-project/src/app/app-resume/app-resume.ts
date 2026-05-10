import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { HeaderComponent } from '../components/header/header';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { ExperienceComponent } from '../components/experience/experience';
import { ResumeService } from '../services/resume.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    SidebarComponent,
    ExperienceComponent
  ],
  templateUrl: './app-resume.html',
  styleUrl: './app-resume.scss'
})
export class AppResumeComponent implements OnInit {
  data: any = null;
  isEditing: boolean = false;
  isExperienceOpen: boolean = true;
  experienceForm!: FormGroup;

  constructor(
    private resumeService: ResumeService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchResume();
    this.initExperienceForm();
  }

  initExperienceForm(): void {
    this.experienceForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      company: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  fetchResume(): void {
    this.resumeService.getResumeData().subscribe({
      next: (res) => {
        this.data = res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Помилка завантаження:', err)
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  toggleExperience(): void {
    this.isExperienceOpen = !this.isExperienceOpen;
  }

  addExperience(): void {
    if (this.experienceForm.valid) {
      this.data.experience.push({ ...this.experienceForm.value });
      this.experienceForm.reset();
      alert('Новий досвід додано!');
    }
  }

  saveResume(): void {
    this.resumeService.saveResumeData(this.data).subscribe({
      next: () => {
        alert('Дані збережено!');
        this.isEditing = false;
        this.cdr.detectChanges();
      },
      error: () => alert('Помилка збереження')
    });
  }

  logout(): void {
    this.authService.logout();
  }

  get currentUser(): string | null {
    return this.authService.getUser();
  }
}
