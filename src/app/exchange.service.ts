import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  link =
    'http://apilayer.net/api/live?access_key=7b239b58f93255b5ef5795cdc77cee8c';

  constructor(private http: HttpClient) {}

  getAllCurrencies() {
    return this.http.get(this.link);
  }
}
