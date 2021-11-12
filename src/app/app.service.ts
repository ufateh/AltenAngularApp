import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private statusURL: string = '/status';

  constructor(private http: HttpClient) { }

  getStatus() : Observable<any> {
    return this.http.get(this.statusURL);
  }
}
