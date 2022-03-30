import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlutoService {
  constructor() {}

  public getValue(): string {
    return 'real value';
  }

  public getObservableValue(): Observable<string> {
    return of('observable value');
  }

  public getPromiseValue(): Promise<string> {
    return new Promise((resolve) => resolve('promise value'));
  }

  // public removeEven(numbers: number[]) {
  //   return numbers.filter((n) => n % 2 === 0);
  // }

  // returnSumOfEven(numbers: number[]): any {
  //   return numbers.includes(1000)?1008:6;
  // }


}
