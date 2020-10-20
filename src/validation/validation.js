import { checkEmail, checkPassword } from "./validationUtils";

export const validateSignUp = ({ email, password, confirmPassword }) => {
  let errors = [];
  if (!checkEmail(email)) {
    let message;
    if (email === "") {
      message = "Email must not be empty";
    } else message = "Emain is not valid";
    errors.push({ field: "email", message });
  }
  const passwordErrors = checkPassword(password, confirmPassword);
  if (passwordErrors.length !== 0)
    passwordErrors.forEach((pError) => errors.push(pError));

  return errors;
};

export const validateLogin = (email, password) => {
  let errors = [];
  let errorObj, errorMsg;
  if (!checkEmail(email)) {
    if (email == "") {
      errorMsg = "Email cannot be empty";
      errorObj = { field: "email", message: errorMsg };
      errors.push(errorObj);
    } else {
      errorMsg = "Email not valid";
      errorObj = { field: "email", message: errorMsg };
      errors.push(errorObj);
    }
  }
  if (password == "") {
    errorMsg = "Password cannot be empty";
    errorObj = { field: "password", message: errorMsg };
    errors.push(errorObj);
  }
  return { errors };
};
