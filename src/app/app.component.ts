import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { JsonPlaceholderService } from "./services/json-placeholder.service"
import { Observable } from 'rxjs';
import "../styles/styles.scss"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private jsonplaceholder: JsonPlaceholderService) { }
  users: Observable<User[]>
  ngOnInit() {
    this.users = this.jsonplaceholder.getdata()
    console.log("ng on it", this.users);

  }

  getDataFromApi() {

  }


}