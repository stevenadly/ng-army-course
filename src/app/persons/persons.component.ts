import {
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ViewChildren,
  QueryList,
  ChangeDetectionStrategy,
} from "@angular/core";
import { SinglePersonComponent } from "./single-person/single-person.component";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsComponent implements OnInit {
  constructor() {}
  @ViewChildren("singlePerson") myPersons: QueryList<SinglePersonComponent>;
  names: string[] = [];

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myPersons.toArray());
  }
  addNewName(n: string) {
    this.names.push(n);
  }
}
