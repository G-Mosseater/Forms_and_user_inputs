import { useState } from "react";
import { Input } from "./Input";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
//keystroke validation only works with useState

export default function Login() {
  //COMMENTED OUT so I can use the useInput hook
  //get hold of the input values beforesubmitting
  // either with a state for each input field or a combined state values in an object
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // //state that keeps focus of the input fields
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // create a computed value
  //outsorced logic, it comes from validation.js

  //on focus validation
  // needs a new state
  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  //    function handleInputChange(identifier, e) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: e.target.value,
  //   }));
  //   //removes the error when user starts to input again
  //   // resets the didEdit state
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }
  // }

  const {
    hasError: emailHasError,
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  function handleSubmit(e) {
    if(!emailHasError) {
      return
    }
  }

  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);

  // function handleSubmit(e) {
  //   e.preventDefault(); //the default behavior of the browser is to send a HTTP request when submitting a form, which reloads the page
  //   setEnteredValues({
  //     email: "",
  //     password: "",
  //   }); //resets the form
  // }
  // change listeners
  // function handleEmailChange(e) {
  //   setEnteredEmail(e.target.value);
  // }

  //  function passwordChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* Can use the custom made Input component with the props we need */}
        <Input
          label="Email"
          type="email"
          id="email"
          // onBlur={() => handleInputBlur("email")}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          // error={emailHasError && "Please enter a valid email"}
          error={emailHasError && 'please enter a valid  email'}
          value={emailValue}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleInputChange("email", e)} //email is the identifier and targeteing email property in the state object
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={(e) => handleInputChange("password", e)}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        {/* for handling form submission we want to listen to these buttons */}
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
