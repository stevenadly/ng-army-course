import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userImg: string;
  placeholder: string;
  listAll: any[];

  constructor() {
    this.userImg =
      "http://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg";
    this.placeholder =
      "https://bare3.com.sa/wp-content/uploads/2020/06/logo.png";

    this.listAll = [
      { name: "steven", age: 25 },
      { name: "steven", age: 25 },
    ];

    setTimeout(() => {
      this.listAll.push({ name: "steven", age: 25 });
    }, 3000);
  }

  ngOnInit(): void {}
}
