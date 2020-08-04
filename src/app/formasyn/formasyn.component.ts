import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { validateNameAsync } from "./asynValidator.validor";

@Component({
  selector: "app-formasyn",
  templateUrl: "./formasyn.component.html",

  styleUrls: ["./formasyn.component.scss"],
})
export class FormasynComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      // username: ["", [Validators.required], [validateNameAsync()]],
      username: [
        "",
        {
          validators: [Validators.required],
          asyncValidators: [validateNameAsync()],
          updateOn: "blur",
        },
      ],
    });

    this.loginForm.valueChanges.subscribe((res) => {
      console.log("value changes ===>", this.username);
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  ngOnInit(): void {}
}
