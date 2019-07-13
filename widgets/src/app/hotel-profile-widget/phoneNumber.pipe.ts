import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'phoneNumber'
})

export class phoneNumberPipe implements PipeTransform {

    public transform(phoneNumber: number): string {
        const stringNumber: string = phoneNumber.toString();

        const phoneNumberNew: string = `
            +${stringNumber.slice(0, 1)}
            (${stringNumber.slice(1, 4)})
            ${stringNumber.slice(4, 7)} -
            ${stringNumber.slice(7, 9)} -
            ${stringNumber.slice(9)}
        `;

        return phoneNumberNew;
    }
}
