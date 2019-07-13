import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { HotelProfileWidgetComponent } from './hotel-profile-widget/hotel-profile-widget.component';
import { selectedTypePipe } from './hotel-profile-widget/selectedType.pipe';
import { phoneNumberPipe } from './hotel-profile-widget/phoneNumber.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    WeatherWidgetComponent,
    HotelProfileWidgetComponent,
    selectedTypePipe,
    phoneNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
