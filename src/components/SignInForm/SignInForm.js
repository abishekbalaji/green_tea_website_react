import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { useState } from "react";
import {
  signInWithGooglePopup,
  userSignInWithEmailAndPassword,
} from "../../utils/firebase";

import "./SignInForm.scss";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(INITIAL_STATE);
  const { email, password } = formFields;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await userSignInWithEmailAndPassword(email, password);
      setFormFields(INITIAL_STATE);
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Wrong credentials");
      } else {
        console.log("Sign In failed", error.message);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="signin-form-container">
      <h2 className="signin-form-title">Already have an account?</h2>
      <span className="signin-form-subtitle">Sign In</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
          green
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
          green
        />
        <div className="signin-form-button-container">
          <Button type="submit" btnType="inverted">
            Sign In
          </Button>
          <Button type="button" btnType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
