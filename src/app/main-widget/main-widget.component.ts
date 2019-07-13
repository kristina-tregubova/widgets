import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ICity } from '../data-model/ICity';
import { IHotel } from '../data-model/ICity';
import { AppService } from '../app.service';

@Component({
  selector: 'main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

  @Input() public city: ICity;
  @Output() public typeEmitter: EventEmitter<string> = new EventEmitter();
  @Output() public hotelEmitter: EventEmitter<IHotel> = new EventEmitter();

  public cities: ICity[] = [];
  public allTypes: string[] = [];

  constructor(
    private appService: AppService
  ) {
    this.appService = appService;
  }
  public ngOnInit(): void {
    const cities$ = this.appService.getCities();

    cities$.subscribe((cities: ICity[]) => {
      cities.forEach((city: ICity) => {
        if (!this.allTypes.includes(city.type.cityName)) {
          this.allTypes.push(city.type.cityName);
        }
      });
    });
  }

  public changeType(type: string): void {
    this.typeEmitter.emit(type);
  }

  public changeProfile(hotel: IHotel): void {
    this.hotelEmitter.emit(hotel);
  }
}
