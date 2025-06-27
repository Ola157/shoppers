import React from "react";

import "../CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div>
        <div className="login-container">
          <h1>Sign Up</h1>

          <div className="input-container">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="button">Continue</button>
          <p className="login-here">
            Already have an account? <span>Login here</span>
          </p>
          <div className="terms">
            <input type="checkbox" />
            <p>By countinuig, I agree to them of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
