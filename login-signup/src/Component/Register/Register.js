import React, { useState } from "react";
import hero_image from "../../Assets/undraw_sign_up_n6im.svg";
import "./Register.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name === "") {
      setShowAlert(true);
    }

    // localStorage.setItem("Registered User", JSON.stringify(input));
  };

  return (
    <>
      <section className="register__section">
        <div className="container">
          <div className="left__section">
            <img src={hero_image} alt="hero-image" />
          </div>

          <div className="right__section">
            <form>
              <h2 style={{ marginBottom: "1.5rem" }}>Sign Up</h2>
              <div className="input-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  required
                />
                      {showAlert && <div className="alert">Please fill the input field</div>}

                <label htmlFor="name">Username</label>
              </div>
              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                      {showAlert && <div className="alert">Please fill the input field</div>}

                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                      {showAlert && <div className="alert">Please fill the input field</div>}

                <label htmlFor="password">Password</label>
              </div>
              <button
                className="primary_btn"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
