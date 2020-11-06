export function checkEmail(email) {
  if (email === "") return { field: "email", message: "Email cannot be empty" };
  else {
    const emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    if (emailRegex.test(email)) return null;
    return { field: "email", message: "Email is not valid" };
  }
}

export function checkHandle(handle) {
  if (handle.length == 0)
    return { field: "handle", message: "Handle cannot be empty" };
  else {
    const handleRegex = /^[a-zA-Z][a-zA-Z0-9_-]{5,10}$/;
    if (handleRegex.test(handle)) return null;
    return {
      field: "handle",
      message:
        "Handle should be atleast 5-10 characters long and can have numbers and special characters",
    };
  }
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
  if (!confirmPassword) return errors;
  if (confirmPassword !== password) {
    errorMsg = "Password does not match";
    errorObj = {};
    errorObj.field = "confirmPassword";
    errorObj.message = errorMsg;
    errors.push(errorObj);
  }
  return errors;
}
