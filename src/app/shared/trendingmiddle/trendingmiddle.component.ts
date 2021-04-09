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
  count=10;
  ngOnInit(): void { 
    this.service.getTrends().subscribe(data=> {
      this.trends=data[0].trends.slice(0,10);
       console.log("trends",this.trends);
    });
  }

}
