import { PipeTransform, Pipe } from '@angular/core';
import { ICity } from '../data-model/ICity';

@Pipe({
    name: 'selectedType'
})

export class selectedTypePipe implements PipeTransform {

    public transform(cities: ICity[], type: string): ICity {
        if (!type || !cities) {
            return;
        }
        const city = cities.filter(city => city.type.cityName === type);
        return city[0];
    }
}
