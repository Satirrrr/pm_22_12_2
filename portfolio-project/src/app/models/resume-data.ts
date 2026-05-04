export interface Skill {
  name: string;
  level: number; // Додаємо рівень (1-5)
}

export interface Education {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ResumeData {
  person: {
    firstName: string;
    lastName: string;
    position: string;
    aboutMe: string;
    photo?: string;    // Додаємо опціональне поле для фото
    phone: string;    // Додаємо телефон
    email: string;    // Додаємо email
    address: string;  // Додаємо адресу
  };
  education: Education[]; // Має бути масив
  experience: Experience[]; // Міняємо jobExperience на experience для зручності
  skills: Skill[];
}
