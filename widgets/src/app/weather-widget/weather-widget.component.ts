import { Component, OnInit, Input } from '@angular/core';
import { ICity } from '../data-model/ICity';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  @Input() public weather: ICity['weather'];

}
