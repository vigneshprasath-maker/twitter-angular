import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {

  constructor(private http:HttpClient) { }

  trends:any;
  ngOnInit(): void {
    this.http.get('https://coda-twitter-replica-backend.herokuapp.com/trends').subscribe(data=> {
    this.trends=data[0].trends;
     console.log("trends",this.trends);
  });

}
}
