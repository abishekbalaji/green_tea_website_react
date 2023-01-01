import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(INITIAL_STATE);
  const { name, email, password, confirmPassword } = formFields;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords donot match!");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      await createUserDocumentFromAuth(user, {
        displayName: name,
      });
      setFormFields(INITIAL_STATE);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("User already exists", error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="signup-form-container">
      <h2 className="signup-form-title">Don't have an account?</h2>
      <span className="signup-form-subtitle">Sign Up</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleInputChange}
          green
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleInputChange}
          green
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleInputChange}
          green
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleInputChange}
          green
        />
        <div>
          <Button type="submit" btnType="inverted">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
