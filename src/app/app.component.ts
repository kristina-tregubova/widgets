import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from './data-model/ICity';
import { IHotel } from './data-model/ICity';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Russian Hotels Widget';
  public cities$: Observable<ICity[]>;
  public selectedType: string = 'St. Petersburg';
  public selectedHotel: IHotel;

  constructor(
    private appService: AppService
  ) {
    this.appService = appService;
  }

  public ngOnInit() {
    this.cities$ = this.appService.getCities();
  }
}


