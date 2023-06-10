import React from "react";
import hero_image from "../../Assets/undraw_fingerprint_login_re_t71l.svg";

const Login = () => {
  return (
    <>
      <section className="register__section">
        <div className="container">
          <div className="left__section">
            <img src={hero_image} alt="hero-image" />
          </div>

          <div className="right__section">
            <form>
              <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>
              <div className="input-field">
                <input type="email" id="email" required />
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" required />
                <label for="password">Password</label>
              </div>
              <button className="primary_btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
