import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  FormControl,
} from '@angular/forms';

@Directive({
  selector: '[noNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoNumberDirective,
      multi: true,
    },
  ],
})
export class NoNumberDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && /\d/.test(value)) {
      return { noNumber: true };
    }

    return null;
  }
}
