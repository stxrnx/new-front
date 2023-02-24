import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numeroTelefono(lunghezza:number): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
        
     const value = control.value

        if (!value) {
            return null
        }

        const hasLength = value.length == lunghezza;

        const lunghezzaValid = hasLength;

        return !lunghezzaValid ? {pippo:true}: null;
    }
}