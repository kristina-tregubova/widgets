import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { HotelProfileWidgetComponent } from './hotel-profile-widget/hotel-profile-widget.component';
import { selectedTypePipe } from './hotel-profile-widget/selectedType.pipe';
import { phoneNumberPipe } from './hotel-profile-widget/phoneNumber.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN, BASE_URL } from './config';
// import { InterceptorService } from './interceptor.service';
import { AppService } from './app.service';
import { HotelCardComponent } from './main-widget/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    WeatherWidgetComponent,
    HotelProfileWidgetComponent,
    selectedTypePipe,
    phoneNumberPipe,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
