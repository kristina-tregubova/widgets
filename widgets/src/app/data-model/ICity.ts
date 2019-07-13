export interface ICity {
    cityImg: string;
      hotels: IHotel[];
      weather: {
         city: string;
         icon: string;
         water: number,
         temperature: number;
      };
      type: {
        cityName: string;
      };
}

export interface IHotel {
 img: string[];
 title: string;
 stars:  string;
 prices: string;
 phoneNumber: number;
 bookingRate: string;
 tripadvisorRate: string;
}
