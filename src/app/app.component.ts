import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly rootURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  title = 'Angular-Http-practice'

}
