import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

private testData: TestItem[] = [{_id: 1,title: "first", tags: ["this","that","these"]}]


  getItems(): Observable<TestItem[]>{
    console.log('Dummy service getBooks called');

    return of(this.testData);
  }
}


export interface TestItem {
  _id: any,
  title: string,
  tags: string[];
}
