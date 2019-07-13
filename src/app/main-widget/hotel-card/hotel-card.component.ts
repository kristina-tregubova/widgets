import { Component, Input } from '@angular/core';
import { ICity, IHotel } from 'src/app/data-model/ICity';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {

  @Input() public hotel: IHotel;

  constructor() { }
}
