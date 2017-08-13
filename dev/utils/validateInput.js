import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  var errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'Field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Field is required';
  }

  if (validator.isEmpty(data.confPwd)) {
    errors.confPwd = 'Field is required';
  }

  if(!validator.equals(data.password, data.confPwd)) {
    errors.pwdDontMatch = "Passwords don't match";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}
