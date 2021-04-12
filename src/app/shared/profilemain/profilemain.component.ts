import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-profilemain',
  templateUrl: './profilemain.component.html',
  styleUrls: ['./profilemain.component.scss']
})
export class ProfilemainComponent implements OnInit {

  constructor( private service:ServiceService) { }
dataa:any;
  ngOnInit(): void {

  this.service.getHome().subscribe(data=> {
    this.dataa=data;
     console.log("dataaaaaaaa",this.dataa);
  });
  }

}
