import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sum",
  pure: false,
})
export class SumPipe implements PipeTransform {
  transform(list: any[], property: string) {
    // debugger;
    return list.reduce((accamulator, b) => accamulator + b[property], 0);
  }
}
