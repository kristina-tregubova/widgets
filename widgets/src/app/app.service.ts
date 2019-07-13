import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICity } from 'src/app/data-model/ICity';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  
  public constructor(
    private http: HttpClient
  ) {
  }

  public getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>('https://my-json-server.typicode.com/cloudswillopenforme/Hotels-Widgets/cities');
  }
}
