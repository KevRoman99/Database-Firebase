import {AbstractControl} from '@angular/forms';
export class PasswordValition {
    static MatchPassword(AC: AbstractControl){
        let password = AC.get('password').value;
        let confirmPassword = AC.get('confirmPassword').value;
        if (password != confirmPassword){
            console.log('false');
            AC.get('confirmPassword').setErrors({MatchPassword: true})
        }else{
            console.log('true');
            return null;
        }
    }
}

