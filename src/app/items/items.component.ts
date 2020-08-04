import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef,
} from "@angular/core";
import { SingleItemComponent } from "./single-item/single-item.component";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  itemNameParent: String = "";
  @ViewChild("itemSingle") itemSingle: SingleItemComponent;
  @Input() parentTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.itemSingle.setName("steven");
    }, 3000);
  }
}
