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
  constructor(private jsonplaceholder: JsonPlaceholderService) {

  }
  data: Observable<User[]>

  getDataFromApi() {
    this.data = this.jsonplaceholder.getdata()
  }
  displaycontent() {
    console.log("mouse over");
  }

}