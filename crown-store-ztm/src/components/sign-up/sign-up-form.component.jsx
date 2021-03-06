import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name } = event;
  };
  return (
    <div>
      <h1>Sign up with you email and pasword</h1>
      <form onSubmit={() => {}}>
        <label>Dispplay Name</label>
        <input type="text" required onChange={handleChange} name="displayName" />

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" />

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" />

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
