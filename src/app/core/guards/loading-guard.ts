import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductDetailsComponent } from "src/app/product-details/product-details.component";
import { Injectable } from "@angular/core";
import { flatMap } from "rxjs/operators";

export interface canComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: "root",
})
export class loadingGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(
    component: canComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    // if (window.confirm("are you sure you want to exit")) {
    //   return true;
    // } else {
    //   return component.canDeactivate();
    // }

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
