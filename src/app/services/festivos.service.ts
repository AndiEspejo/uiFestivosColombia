import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';
import { Festivo } from '../entidades/Festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  url: string;
  day = ''
  month = ''
  year = ''

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}`
  }

  public listarFestivos(año: string): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}obtener/${año}`).pipe(
      map(response => response.map(item => {
        return {
          fecha: item.fecha,
          festivo: item.festivo
        } as Festivo;
      }))
    );
  }

  public validarFestivo(fecha: Date): Observable<any> {
    this.day = fecha.getDate().toString();
    this.month = (fecha.getMonth() + 1).toString();
    this.year = fecha.getFullYear().toString();

    return this.http.get(`${this.url}verificar/${this.year}/${this.month}/${this.day}`, { responseType: 'text' })
      .pipe(
        map(response => {
          const jsonResponse = {
            esFestivo: response === 'Es festivo',
            mensaje: response
          };
          return jsonResponse;
        })
      );
  }
}
