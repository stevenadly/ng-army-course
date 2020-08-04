import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, EMPTY } from "rxjs";
import { Injectable } from "@angular/core";
import { TodosService } from "../todos.service";

@Injectable({
  providedIn: "root",
})
export class productResolver implements Resolve<any> {
  constructor(private todoservice: TodosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let pageId = +route.paramMap.get("id");

    debugger;
    return pageId ? this.todoservice.getProductById(pageId) : EMPTY;
  }
}
