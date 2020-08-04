import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { environment } from "src/environments/environment";
import { Student } from "src/models/student.model";
import LocaleAr from "@angular/common/locales/ar-EG";
import { registerLocaleData } from "@angular/common";

import { ajax } from "rxjs/ajax";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

registerLocaleData(LocaleAr);
environment;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "ng-army";
  uname: string = "";
  classBindingColor: Boolean = true;
  students: Student[];
  bd = new Date();
  @ViewChild("myuname") myuname: ElementRef<HTMLInputElement>;
  promiseReturn: string;
  prmise2: string;
  promiseAsync: Promise<string>;

  jsonplaceholderdata: any[] = [];
  jsonplaceholderdataOba: Observable<any>;

  teams = [];

  constructor(public ActivatedRoute: ActivatedRoute) {
    console.log("this activated route ---", ActivatedRoute);
    this.students = [
      {
        name: "steven",
        age: 26,
      },
      {
        name: "ali",
        age: 26,
      },
      {
        name: "ahmed",
        age: 26,
      },
    ];

    this.teams = [
      {
        name: "egypt",
        id: 1,
      },
      {
        name: "barzil",
        id: 2,
      },
      {
        name: "france",
        id: 3,
      },
      {
        name: "england",
        id: 4,
      },
    ];

    this.getPromise().then((msg: any) => {
      this.promiseReturn = msg;
    });

    this.getpromise2().then((msg2: any) => {
      this.prmise2 = msg2;
    });

    this.promiseAsync = this.getpromise2();

    this.returnAllobs();

    this.jsonplaceholderdataOba = this.returnAllobs2();
  }
  call() {
    setTimeout(() => {
      console.log("element : ", this.myuname.nativeElement.value);
    }, 2000);
  }

  getPromise() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("my response at set time out");
      }, 3000);
    });
  }

  getpromise2() {
    // htrg3 string
    return new Promise<string>((res) => {
      setTimeout(() => {
        res("get promise 2");
      }, 2000);
    });
  }

  returnObservable() {
    return ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
    });
  }

  returnAllobs() {
    this.returnObservable().subscribe((data: any) => {
      this.jsonplaceholderdata = data;
    });
  }

  returnAllobs2(): Observable<any> {
    return this.returnObservable();
  }
}
