import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataProjects } from "../../data/dataProjects"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentPhotoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = dataProjects.filter(article => article.id == id)[0]
        this.contentTitle = result.title
        this.contentPhotoCover = result.photo
        this.contentDescription = result.description
  }

}
