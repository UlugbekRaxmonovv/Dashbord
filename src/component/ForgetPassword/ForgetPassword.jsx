import React, { useState, memo } from 'react';
import './ForgetPassword.css'
// import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/index";
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [animationCode, setAnimationCode] = useState(false);
  // const [newPassword, setNewPassword] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
        setCode(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (!animationCode) {
        axios
            .get(`/users/set/{email}?email=${email}`)
            .then(response => {
                console.log(response);
                setAnimationCode(true);
                toast.success("Verification code sent to your email");
            })
            .catch(err => {
                console.error(err);
                toast.error("The email address is incorrect");
            })
            .finally(() => {
                setLoading(false);
            });
    } else {
        axios
            .post(`/users/code`,{ code, email })
            .then(response => {
                console.log(response);
                setNewPassword(false);
                toast.success("Code verified successfully");
            })
            .catch(err => {
                console.error(err);
                toast.error("The code is incorrect");
            })
            .finally(() => {
                setLoading(false);
            });
    }
  };

  return (
    <div>
      <section className="box">
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <div className="box_all">
              <div className="box_link"></div>
              <h1>Touristan Admin Page</h1>
            </div>
            <div className="login-i">
              <div className="login_r">
                <h1>Sign In</h1>
                <p>Enter your credentials to access your account</p>
              </div>
            </div>
            <div className="login_row">
              <div className="login_input">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {animationCode && (
                <div className="login_input">
                  <label htmlFor="code">Verification Code</label>
                  <br />
                  <input
                    type="text"
                    id="code"
                    maxLength={6}
                    minLength={6}
                    value={code}
                    onChange={handleChange}
                    placeholder="Enter your code"
                    required
                  />
                </div>
              )}
              <div className="login_input_alt">
                <button type="submit">{loading ? 'Loading....' : "SIGN IN"}</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default memo(ForgetPassword);
