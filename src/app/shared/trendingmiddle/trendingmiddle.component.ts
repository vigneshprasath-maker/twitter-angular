import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-trendingmiddle',
  templateUrl: './trendingmiddle.component.html',
  styleUrls: ['./trendingmiddle.component.scss']
})
export class TrendingmiddleComponent implements OnInit {

  constructor(private service:ServiceService) { }
  trends:any;
  locations:any;
  count=10;
  ngOnInit(): void { 
    this.service.getTrends().subscribe(data=> {
      console.log(data);
      this.trends=data[0];
      this.locations=data;
      console.log("trending",this.trends);
      this.trends=this.trends[0].trends;
       console.log("trends1",this.trends);
    });
  }

}
