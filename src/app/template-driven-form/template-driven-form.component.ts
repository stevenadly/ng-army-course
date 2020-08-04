import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("f") myform;
  constructor() {}

  ngOnInit(): void {}

  onsubmit() {
    console.log("this form is ", this.myform);
    localStorage.setItem("form", JSON.stringify(this.myform.value));

    setTimeout(() => {
      this.myform.reset();
    }, 2000);
  }
}
