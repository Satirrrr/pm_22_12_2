import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent } from './components/sidebar/sidebar';
import { ExperienceComponent } from './components/experience/experience';

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
  imports: [CommonModule, HeaderComponent, SidebarComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  data = {
    person: {
      firstName: "NOEL",
      lastName: "GATES",
      position: "GRAPHIC & WEB DESIGNER",
      aboutMe: "Highly motivated and results-oriented professional with a passion for creating visually stunning and user-friendly digital experiences.",
      photo: "images/avatar.jpg",
      phone: "+1-718-310-5588",
      email: "yourinfo@gmail.com",
      address: "769 Prudence Street Lincoln Park, MI 48146"
    },
    education: [
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
      { name: "Adobe Photoshop", level: 5 },
      { name: "HTML5 / CSS3", level: 5 },
      { name: "JavaScript (ES6+)", level: 4 },
      { name: "SASS / SCSS", level: 4 },
      { name: "Gulp / Webpack", level: 5 }
    ],
    experience: [
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

  toggleSection(sectionName: keyof SectionStatus) {
    this.sectionStatus[sectionName] = !this.sectionStatus[sectionName];
  }
}
