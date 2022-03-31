import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { defer, of } from 'rxjs';

import { Hero, TopolinoService } from './topolino.service';

describe('TopolinoService', () => {
  let service: TopolinoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']); //get is its method
    service = new TopolinoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes: Hero[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
  
    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes)); //of instead of async
  
    service.getHeroes().subscribe({
      next: heroes => {
        expect(heroes)
          .withContext('expected heroes')
          .toEqual(expectedHeroes);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getHeroes().subscribe({
      next: heroes => done.fail('expected an error, not heroes'),
      error: error  => {
        expect(error.message).toContain('404 Not Found');
        done();
      }
    });
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(data: T) {
  return defer(() => Promise.reject(data));
}