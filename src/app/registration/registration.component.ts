import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  url: string = "localhost:3000/api/registration";
  emailOrPhone: RegExp = /^(375[0-9]{9}|\w+@\w+\.\w{2,3})$/;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        name: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirm: ["", [Validators.required]],
        emailOrPhone: ["", Validators.compose([Validators.required, Validators.pattern(this.emailOrPhone)])]
      },
      {
        validator: this.isPasswordSame("password", "confirm")
      }
    );
  }

  isPasswordSame(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    const controls = this.registrationForm.controls;

    if (this.registrationForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      console.log("register data", this.registrationForm.value);
      this.dataService.sendCredentials(this.url, this.registrationForm.value).subscribe(
        _ => {},
        error => {
          if (error) {
            alert("Credentials is not sent");
          }
        }
      );
    }
    this.registrationForm.reset();
  }
  ngOnInit() {}
}
