import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
} from "@angular/core";
import { SubPersonComponent } from "../../sub-person/sub-person.component";

@Component({
  selector: "app-single-person",
  templateUrl: "./single-person.component.html",
  styleUrls: ["./single-person.component.css"],
})
export class SinglePersonComponent implements OnInit {
  @Input("personName") personName: string;
  @ContentChild(SubPersonComponent) subPerson: SubPersonComponent;
  // myTitleNew: string;
  // @Input("personName") set personName(pname: string) {
  //   console.log(pname);
  //   if (pname) {
  //     this.myTitleNew = pname;
  //   } else {
  //     this.myTitleNew = "";
  //   }
  // }

  @Output() eventFromChild: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  setPName(pname: string) {
    alert(`person name : ${pname}`);
  }
  pushEvents() {
    this.eventFromChild.emit("person id from event emitter");
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.myTitleNew = "";
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit>>", this.subPerson);
  }
}
