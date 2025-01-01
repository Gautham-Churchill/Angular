import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Language, Student, OrderBook, LatestPrices } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private localUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.localUrl + 'languages');
  }

  getStudent(): Observable<Student> {
    return this.http.get<Student>(this.localUrl + 'student');
  }

  getOrders(): Observable<OrderBook> {
    return this.http.get<OrderBook>(this.localUrl + 'orderbook');
  }

  getLatestPrices(): Observable<LatestPrices> {
    return this.http.get<LatestPrices>(this.localUrl + 'latestprices');
  }
}
