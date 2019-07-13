import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICity } from 'src/app/data-model/ICity';
import { BASE_URL_TOKEN } from './config';


@Injectable()
export class AppService {
  
  public constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
  }

  public getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`${this.baseUrl}/cities`);
  }
}
