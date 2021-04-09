import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-middlesection',
  templateUrl: './middlesection.component.html',
  styleUrls: ['./middlesection.component.scss'],

  providers: [DatePipe]
})
export class MiddlesectionComponent implements OnInit {
  @Input() uname:any;
  constructor(private http:HttpClient,private datePipe:DatePipe) {}
  dataa:any;
  trends:any;
  reply:any;
  images:any;
  ngOnInit(): void {
    console.log(this.uname)

  this.http.get('https://coda-twitter-replica-backend.herokuapp.com/home?count=20').subscribe(data=> {
    this.dataa=data;
    this.reply=this.dataa;
    this.images=this.dataa.in_reply_to_status_id;
     console.log("dataaaaaaaa",this.dataa);
  });
  


}
}
