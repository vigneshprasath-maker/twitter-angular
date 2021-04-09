import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-middlesection',
  templateUrl: './middlesection.component.html',
  styleUrls: ['./middlesection.component.scss'],

  providers: [DatePipe]
})
export class MiddlesectionComponent implements OnInit {
  @Input() uname:any;
  constructor(private service:ServiceService,private datePipe:DatePipe) {}
  dataa:any;
  trends:any;
  reply:any;
  images:any;
  ngOnInit(): void {
    console.log(this.uname)

  this.service.getHome().subscribe(data=> {
    this.dataa=data;
    this.reply=this.dataa;
    this.images=this.dataa.in_reply_to_status_id;
     console.log("dataaaaaaaa",this.dataa);
  });
  


}
}
