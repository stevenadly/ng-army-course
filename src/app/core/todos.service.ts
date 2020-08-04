import { Injectable } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { ajax } from "rxjs/ajax";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor() {}
  getProductById(id: number) {
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
