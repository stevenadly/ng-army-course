import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"],
})
export class TeamsComponent implements OnInit {
  id: number;
  name: string;
  routeSubscription: Subscription;
  constructor(public ActivatedRoute: ActivatedRoute, private router: Router) {
    console.log("this activated route ---", ActivatedRoute);
    this.routeSubscription = ActivatedRoute.params.subscribe((val: any) => {
      this.id = val.id;
      this.name = val.tname;
      console.log("id ---", this.id);
      // put the code from `ngOnInit` here
    });
  }

  gohome() {
    // lw hykon fe functions yb2a navigate
    // this.router.navigate(["../../"], { relativeTo: this.ActivatedRoute });

    // lw url bseet yb2a navigateByUrl
    this.router.navigateByUrl("../", { relativeTo: this.ActivatedRoute });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    debugger;
    this.routeSubscription.unsubscribe;
  }
  //   let id = this.route.snapshot.paramMap.get("id");
  //   console.log("id ====>", id);
  // }
}
