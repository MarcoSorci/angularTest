import { TestBed } from '@angular/core/testing';

import { PlutoService } from './pluto.service';

describe('PlutoService', () => {
  let service: PlutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    });
  });

  // it('#removeEven should return odd numbers in the array', () => {
  //   const numbersTestArr = [1, 2, 3, 4, 5];
  //   expect(service.removeEven(numbersTestArr)).toEqual([1, 3, 5]); //toEqual because the array doesn't === with toBe
  // });

  // it('#returnSumOfEven should return sum of even numbers in the array', () => {
  //   const numbersTestArr = [1, 2, 3, 4, 5];
  //   expect(service.returnSumOfEven(numbersTestArr)).toBe(6); 
  // });
});
