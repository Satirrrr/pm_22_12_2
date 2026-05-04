import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeData } from './models/resume-data';
interface SectionStatus {
  contact: boolean;
  experience: boolean;
  references: boolean;
  about: boolean;
  education: boolean;
  skills: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Дані відповідають структурі ResumeData та запитам у шаблоні app.html
  data: ResumeData = {
    person: {
      firstName: "NOEL",
      lastName: "GATES",
      position: "GRAPHIC & WEB DESIGNER",
      aboutMe: "Highly motivated and results-oriented professional with a passion for creating visually stunning and user-friendly digital experiences.",
      photo: "images/avatar.jpg", // Поле для *ngIf="data.person.photo"
      phone: "+1-718-310-5588",   // Поле для {{ data.person.phone }}
      email: "yourinfo@gmail.com", // Поле для {{ data.person.email }}
      address: "769 Prudence Street Lincoln Park, MI 48146" // Поле для {{ data.person.address }}
    },
    education: [ // Додано масив для *ngFor="let edu of data.education"
      {
        university: "STANFORD UNIVERSITY",
        degree: "MASTER DEGREE GRADUATE",
        startDate: "2011",
        endDate: "2013"
      },
      {
        university: "UNIVERSITY OF CHICAGO",
        degree: "BACHELOR DEGREE GRADUATE",
        startDate: "2007",
        endDate: "2010"
      }
    ],
    skills: [
      { name: "Adobe Photoshop", level: 5 }, // Змінено на level (number) для '★'.repeat()
      { name: "HTML5 / CSS3", level: 5 },
      { name: "JavaScript (ES6+)", level: 4 },
      { name: "SASS / SCSS", level: 4 },
      { name: "Gulp / Webpack", level: 5 }
    ],
    experience: [ // Перейменовано з jobExperience на experience для шаблону
      {
        position: "WEB DESIGNER",
        company: "Creative Agency",
        location: "Chicago",
        startDate: "2020",
        endDate: "Present",
        description: "Led the redesign of the company's flagship e-commerce platform, resulting in a 25% increase in conversion rates."
      },
      {
        position: "GRAPHIC DESIGNER",
        company: "Creative Market",
        location: "Chicago",
        startDate: "2015",
        endDate: "2020",
        description: "Developed over 50 brand identity packages for international clients."
      }
    ]
  };

sectionStatus: SectionStatus = {
    contact: true,
    experience: true,
    references: true,
    about: true,
    education: true,
    skills: true
  };

  // 2. Метод перемикання стану
  // Використовуємо Union Type для sectionName, щоб суворо обмежити назви секцій
  toggleSection(sectionName: keyof SectionStatus) {
      this.sectionStatus[sectionName] = !this.sectionStatus[sectionName];
    }
}
