import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-children-three",
  templateUrl: "./children-three.component.html",
  styleUrls: ["./children-three.component.scss"]
})
export class ChildrenThreeComponent implements OnInit {
  @Input() name: string;
  constructor() {}
  ngOnInit() {}
}
