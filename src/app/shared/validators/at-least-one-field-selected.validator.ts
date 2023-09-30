import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function atLeastOneFieldValueTruthy(fields: string[]): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    return (fields.some((field) => !!form.get(field)?.value)) ? null : {noFieldSelected: true};
  }
}
