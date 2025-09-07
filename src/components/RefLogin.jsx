import { useRef, useState } from "react";

// using useRef to get ahold of the input values
// not recommended when clearing the inputs

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault(); //the default behavior of the browser is to send a HTTP request when submitting a form, which reloads the page

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // console.log(enteredEmail);
    // e.target.reset(); // clears the form

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
