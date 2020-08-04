import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-single-item",
  templateUrl: "./single-item.component.html",
  styleUrls: ["./single-item.component.css"],
})
export class SingleItemComponent {
  @Input("itemName") itemName: String;
  constructor() {}
  setName(name: string) {
    console.log(`my new name :  ${name}`);
  }
}
