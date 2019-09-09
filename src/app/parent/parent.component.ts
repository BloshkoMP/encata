import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  parentId: string = "231417";
  isDisabled: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToChildren() {
    this.isDisabled = true;
    this.router.navigate(["parent/children", this.parentId]);
  }
}
