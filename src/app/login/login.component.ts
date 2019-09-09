import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  url: string = "localhost:3000/api/login";

  constructor(private dataService: DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmit() {
    const controls = this.loginForm.controls;

    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      console.log("Login data", this.loginForm.value);
      this.dataService.sendCredentials(this.url, this.loginForm.value).subscribe(
        _ => {},
        error => {
          if (error) {
            alert("Credentials is not sent");
          }
        }
      );
    }
    this.loginForm.reset();
  }
  ngOnInit() {}
}
