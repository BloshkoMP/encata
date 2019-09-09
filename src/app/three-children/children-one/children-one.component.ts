import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-children-one",
  templateUrl: "./children-one.component.html",
  styleUrls: ["./children-one.component.scss"]
})
export class ChildrenOneComponent implements OnInit {
  @Output() getName: EventEmitter<any> = new EventEmitter();
  public name: string = "children-one";
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.getName.emit(this.name);
  }
}
