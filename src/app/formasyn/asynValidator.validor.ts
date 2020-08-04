import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { delay, map } from "rxjs/operators";

export function validateNameAsync(): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Observable<{ [key: string]: boolean } | null> => {
    return checkformserver().pipe(
      map((res) => {
        console.log("res is : ", res);

        return res.username == control.value ? { usernameexist: true } : null;
      })
    );
  };

  function checkformserver(): Observable<any> {
    return ajax
      .getJSON("https://jsonplaceholder.typicode.com/users/1")
      .pipe(delay(1000));
  }
}
