import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ICity, IHotel } from '../data-model/ICity';

@Component({
  selector: 'hotel-profile-widget',
  templateUrl: './hotel-profile-widget.component.html',
  styleUrls: ['./hotel-profile-widget.component.css']
})
export class HotelProfileWidgetComponent implements OnInit {

  @Input() public city: ICity;
  @Input() public hotelProfile: Object;
  @Input() public selectedHotel: IHotel;

  public constructor() { }

  public ngOnInit() {
    if (this.city) {
      this.selectedHotel = this.city.hotels[0];
    }
  }
}
