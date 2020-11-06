import { checkEmail, checkPassword, checkHandle } from "./validationUtils";

export const validateSignUp = ({
  email,
  handle,
  password,
  confirmPassword,
}) => {
  let errors = [];
  let emailError = checkEmail(email);
  if (emailError) {
    errors.push(emailError);
  }
  let handleError = checkHandle(handle);
  if (handleError) {
    errors.push(handleError);
  }
  const passwordErrors = checkPassword(password, confirmPassword);
  if (passwordErrors.length !== 0)
    passwordErrors.forEach((pError) => errors.push(pError));

  if (errors.length == 0) return { errors: null };
  else return { errors };
};

export const validateLogin = ({ email, password }) => {
  let errors = [];
  console.log(email, password);
  let emailError = checkEmail(email);
  if (emailError) {
    errors.push(emailError);
    console.log(emailError);
  }
  const passwordErrors = checkPassword(password, null);
  if (passwordErrors.length !== 0)
    passwordErrors.forEach((pError) => errors.push(pError));

  if (errors.length == 0) return { errors: null };
  else return { errors };
};
