import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
    constructor(private http: HttpClient) { }

  users: any =[];
  error: any;

  ngOnInit(): void {
      this.http.get('http://localhost:3000/user', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    }).subscribe(res => {
        console.log(res);
        this.users = res;
      }, error => {
        console.error(error);
        this.error = error?.statusText;
      })
  
  }
}
