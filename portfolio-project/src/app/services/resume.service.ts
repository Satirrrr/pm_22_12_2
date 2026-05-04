import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume';

  constructor(private http: HttpClient) {}

  // Отримання даних (GET)
  getResumeData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Помилка при отриманні даних:', error);
        return throwError(() => new Error('Не вдалося завантажити дані з сервера.'));
      })
    );
  }

  // Відправка даних (POST)
  saveResumeData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      catchError(error => {
        console.error('Помилка при збереженні даних:', error);
        return throwError(() => new Error('Не вдалося зберегти дані на сервері.'));
      })
    );
  }
}
