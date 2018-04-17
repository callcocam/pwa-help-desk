import { FormGroup, ValidatorFn } from '@angular/forms';
import { FormControl, AbstractControl } from '../../../node_modules/@angular/forms/src/model';

export class EqualValidator {

  /**
   Verify the value are same in two input text

   ### Example

   ```
   public makeFormModel(): FormGroup {
     return this.formBuilder.group({
       senhaAtual: [ '', Validators.required ],
       senhaNova: [ '', this.passwordValidator() ],
       senhaNovaConfirmacao: [ '', this.passwordValidator() ],
     },
     { validator: EqualValidator.equalControlValue('senhaNova', 'senhaNovaConfirmacao') }
     );
   }
   ```
   */
  static equalControlValue(targetKey: string, toMatchKey: string): ValidatorFn {

    return (group: FormGroup): { [key: string]: any } => {

      const target = group.controls[ targetKey ];
      const toMatch = group.controls[ toMatchKey ];
      if (target.touched && toMatch.touched) {

        const isMatch = target.value === toMatch.value;

        // set equal value error on dirty controls
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({ equalValue: targetKey });
          const message = targetKey + ' diferente de ' + toMatchKey;
          return { 'equalValue': message };
        }

        if (isMatch && toMatch.hasError('equalControlValue')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }

  /**
   * @param formControlReference
   * @returns {(control:AbstractControl)=>{[p: string]: any}}
   *
   *    ### Example
   *
   * ```
   public makeFormModel(): FormGroup {

    const formControlReference: FormControl = new FormControl('', Validators.required);

    const senhaConfirmaFormControl: FormControl = new FormControl('',
      Validators.compose([Validators.required,
      this.sameValue(formControlReference)]));

    return this.formBuilder.group({
      senha: formControlReference,
      confirmaSenha: senhaConfirmaFormControl,
    });

   }
   * ```
   */
  static sameValue(formControlReference: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      const isSame = formControlReference.value === control.value;

      return isSame ? null : { 'sameValue': formControlReference.value + ' diferente de ' + control.value };
    };
  }

}