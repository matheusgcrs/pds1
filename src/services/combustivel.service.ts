import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CombustivelService {
  private readonly apiUrl = 'http://localhost:8080/api/combustiveis';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarPorTipo(tipo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tipo/${tipo}`);
  }
}
