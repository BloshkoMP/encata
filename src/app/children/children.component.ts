import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-children",
  templateUrl: "./children.component.html",
  styleUrls: ["./children.component.scss"]
})
export class ChildrenComponent implements OnInit {
  parentId: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => (this.parentId = params.id));
  }

  ngOnInit() {}
}
