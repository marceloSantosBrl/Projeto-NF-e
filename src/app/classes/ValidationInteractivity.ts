import {FormControl} from "@angular/forms";

export class ValidationInteractivity {
  public static getWarningVisibility(input: FormControl): boolean {
    return input.invalid && !input.pristine;
  }
}
