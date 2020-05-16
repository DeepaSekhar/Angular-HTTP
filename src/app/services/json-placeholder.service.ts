import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Post } from '../posts';

@Injectable({
  providedIn: 'root'
})

export class JsonPlaceholderService {

  readonly URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getdata(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL);
  }


}
