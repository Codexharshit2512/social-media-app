import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import { fetchUsers } from "./redux/actionsCreators/userDetailActions";
import firebase from "./config/config";
import { store } from "./store/store";
import { checkUserSession } from "./userSession";

// console.log(
//   jwt_decode(
//     "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJmOGI1NTdjMWNkMWUxZWM2ODBjZTkyYWFmY2U0NTIxMWUxZTRiNDEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc29jaWFsLW1lZGlhLWFwcC01NjdlMCIsImF1ZCI6InNvY2lhbC1tZWRpYS1hcHAtNTY3ZTAiLCJhdXRoX3RpbWUiOjE2MDU1MzIyMzEsInVzZXJfaWQiOiI2SE5EUXBvUEhXWXVKN0I1MGJMVTFJQm82ZTAyIiwic3ViIjoiNkhORFFwb1BIV1l1SjdCNTBiTFUxSUJvNmUwMiIsImlhdCI6MTYwNTUzMjIzMSwiZXhwIjoxNjA1NTM1ODMxLCJlbWFpbCI6InVzZXI4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyOEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fG840SNo-VfHlIPYT1lOUQgYI9prSD-dGeVCQBK-DCxd4Cx4uXDdz8Y7CsxlAY3azaQOnhYFB2e-RM4QyA5imaB1_YV2ue_GpqFgmZbHIRfG5aFJ2aPp4LKTVrCtCu1aCXfAwk0f2gJi1wsZRjmcgkOxS6sZML6jO9NTyy-3saLuptdGzsGE_P5qzXu7twESjKetdFvq5sOdtRiyFeeyRWNCEPlolviKN3fgJhDFOddCxpWQ_sipNP-R2VbIJoNCqT7WSqiNkGp4-mfZRWelJwviHSMVHiVjrM5nGhw1Bt_MhASVZYyf2hRqySC7QjiqcZ2JXzDCk59kj7ozzwrFqA"
//   )
// );

checkUserSession();

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchUsers()), []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
