import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  constructor() { }
  get username():string{
    return "@"+"Fareed765764"
  }
  ngOnInit(): void {
  }

}
