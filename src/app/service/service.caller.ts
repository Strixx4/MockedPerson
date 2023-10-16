import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { information } from '../interfaces/interfaces.information';
import { blank, mockedArray } from '../mockeddata/mockeddata.personmocked';

@Injectable({
  providedIn: 'root'
})
export class CallerService {
  private dataSource: BehaviorSubject<information> = new BehaviorSubject<information>(blank);
  data: Observable<information> = this.dataSource.asObservable();
  arrayMocked: information[];

  constructor(
    private http: HttpClient
  ) { 
    this.arrayMocked = mockedArray;
  }

  getCall(): Observable<any> {
    return this.http.get<any>('');
  }

  postCall(object: any): Observable<any> {
    return this.http.post<any>('', object);
  }

  mockedCall(): information[] {
    return this.arrayMocked;
  }

  addComponent(data: information){
    this.arrayMocked.push(data);
  }

  sendDataByEvent(data: information) {
    this.dataSource.next(data);
    this.addComponent(data);
  }
}