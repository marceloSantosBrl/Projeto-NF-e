import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function biggerThanZero(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null) {
      return null;
    }
    const wrongValue = control.value <= 0;
    return wrongValue ? {lowerThanZero: {value: control.value}} : null;
  };
}
