import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-three-children",
  templateUrl: "./three-children.component.html",
  styleUrls: ["./three-children.component.scss"]
})
export class ThreeChildrenComponent implements OnInit {
  public name: string;
  constructor() {}
  ngOnInit() {}

  getComponentName(childrenName: string) {
    this.name = childrenName;
  }
}
