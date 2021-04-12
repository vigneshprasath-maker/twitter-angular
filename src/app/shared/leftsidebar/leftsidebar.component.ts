import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {


    this.username=localStorage.getItem('uname');
    console.log("userinleftside",this.username)
  }

}
