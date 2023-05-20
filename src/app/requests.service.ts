import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  baseUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getJokes(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

}
