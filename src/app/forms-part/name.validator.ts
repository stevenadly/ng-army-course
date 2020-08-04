import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function validateName(control: AbstractControl) {
//   if (control.value.match(/[0-9]/g)) {
//      return { invalidName: true };
//   } else {
//     return null;
//   }
// }

// export function validateName(nameRegex: RegExp): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     if (control.value.match(nameRegex)) {
//       return { invalidName: true };
//     } else {
//       return null;
//     }
//   };
// }

export function validateName(nameregex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value.match(nameregex)) {
      return { invalidName: true };
    } else {
      return null;
    }
  };
}
