import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendingmiddle',
  templateUrl: './trendingmiddle.component.html',
  styleUrls: ['./trendingmiddle.component.scss']
})
export class TrendingmiddleComponent implements OnInit {

  constructor(private http:HttpClient) { }
  trends:any;
  count=10;
  ngOnInit(): void { 
    this.http.get('https://coda-twitter-replica-backend.herokuapp.com/trends').subscribe(data=> {
      this.trends=data[0].trends;
       console.log("trends",this.trends);
    });
  }

}
