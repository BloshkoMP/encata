import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-children-two",
  templateUrl: "./children-two.component.html",
  styleUrls: ["./children-two.component.scss"]
})
export class ChildrenTwoComponent implements OnInit {
  @Output() getName: EventEmitter<any> = new EventEmitter();
  public name: string = "children-two";
  constructor() {}

  ngOnInit() {}
  onClick() {
    this.getName.emit(this.name);
  }
}
