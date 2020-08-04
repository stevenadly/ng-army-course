import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControlName,
  FormControl,
  Validators,
} from "@angular/forms";
import { validateName } from "../forms-part/name.validator";

@Component({
  selector: "app-dashboard2",
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.css"],
})
export class Dashboard2Component implements OnInit {
  formgroup: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor() {
    this.creatFormControl();
    this.initForm();

    this.formgroup.valueChanges.subscribe((params) => {
      console.log("this form group ----", this.formgp);
    });
  }
  creatFormControl() {
    this.firstName = new FormControl("", [
      Validators.required,
      validateName(/[0-9]/g),
    ]);
    this.lastName = new FormControl("", [Validators.required]);
  }

  initForm() {
    this.formgroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  get formgp() {
    return this.formgroup;
  }
  ngOnInit(): void {}
}
