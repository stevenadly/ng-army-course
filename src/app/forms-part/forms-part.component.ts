import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { validateName } from "./name.validator";

@Component({
  selector: "app-forms-part",
  templateUrl: "./forms-part.component.html",
  styleUrls: ["./forms-part.component.css"],
})
export class FormsPartComponent implements OnInit {
  unameConttrol = new FormControl();
  profileForm: FormGroup;

  // profileForm = new FormGroup({
  //   fname: new FormControl(),
  //   lname: new FormControl(),

  //   address: new FormGroup({
  //     area: new FormControl(),
  //     street: new FormControl(),
  //   }),
  // });
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fname: ["", Validators.required],
      lname: [""],
      email: [
        "",
        [
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
          validateName,
        ],
      ],
      address: this.fb.group({
        area: "",
        street: "",
      }),
    });

    this.profileForm.valueChanges.subscribe((params: any) => {
      if (isNaN(params.lname)) {
        this.profileForm.patchValue(
          {
            lname: params.lname.replace(/[a-zA-z]/g, ""),
          },
          { emitEvent: false }
        );
      }

      console.log("email changes", this.myEmail);
    });
  }

  // ------------------------form getters methods
  get myfname() {
    return this.profileForm.get("fname");
  }

  get myEmail() {
    return this.profileForm.get("email");
  }
  submitFn() {
    console.log("form is ", this.profileForm.get("fname"));
  }
  ngOnInit(): void {}
}
