import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageValidatorService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'ERROR.REQUIRED',
      'invalidEmailAddress': 'ERROR.INVALID_EMAIL',
      'loginNotRegistered': 'ERROR.LOGIN_NOT_REGISTERED',
      'invalidPassword': 'ERROR.INVALID_PASSWORD',
      'minlength': 'ERROR.INVALID_MIN_LENGTH',
      'invalidDate': 'ERROR.INVALID_DATE',
      'loginInUse': 'ERROR.LOGIN_IN_USE',
      'invalidPasswordConfirm': 'ERROR.INVALID_PASSWORD_CONFIRM'
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value) {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'ERROR.INVALID_EMAIL': true };
      }
    }

    return null;
  }

  static passwordValidator(control) {
    // {4,100}           - Assert password is between 4 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&.*]{4,100}$/)) {
      return null;
    } else {
      return { 'ERROR.INVALID_PASSWORD': true };
    }
  }

  static dateNumberValidator(control) {

    if (control.value) {
      let dateArray = control.value.split('-');

      if (dateArray != null && dateArray.length == 3) {

        let day = dateArray[0];
        let month = dateArray[1];
        let year = dateArray[2];

        let daysInMonth = new Date(year, month, 0).getDate();

        if (month > 0 && month <= 12 && day <= daysInMonth && year.length == 4) {
          return null;
        }

        return { 'ERROR.INVALID_DATE': true };
      }
      else {
        return { 'ERROR.INVALID_DATE': true };
      }

    }

    return null;
  }
}
