import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentPhotoCover:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
  contentTitle:string = "aaaaaaaaaaaaaaaaaaaa"
  contentDescription:string = "bbbbbbbbbbbbbbbb"

  constructor() { }

  ngOnInit(): void {
  }

}
