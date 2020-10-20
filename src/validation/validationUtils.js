export function checkEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

export function checkPassword(password, confirmPassword) {
  let errors = [],
    errorObj,
    errorMsg;
  if (password === "") {
    errorMsg = "Password cannot be empty";
    errorObj = {};
    errorObj.field = "password";
    errorObj.message = errorMsg;
    errors.push(errorObj);
  } else {
    let passwordRegex = /^[a-zA-Z0-9]{7,15}$/;
    if (!passwordRegex.test(password)) {
      errorMsg = "Password should be between 7-15 characters long";
      errorObj = {};
      errorObj.field = "password";
      errorObj.message = errorMsg;
      errors.push(errorObj);
    }
  }
  if (confirmPassword !== password) {
    errorMsg = "Password does not match";
    errorObj = {};
    errorObj.field = "passwordConfirm";
    errorObj.message = errorMsg;
    errors.push(errorObj);
  }
  return errors;
}
