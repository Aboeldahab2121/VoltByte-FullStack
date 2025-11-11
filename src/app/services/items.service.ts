import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../Features/items/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://laravel-pc-parts.test/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  createItem(item: FormData): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  updateItem(id: number, item: FormData): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}