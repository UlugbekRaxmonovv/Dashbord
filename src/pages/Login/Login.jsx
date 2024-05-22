import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigati = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {
      email: email,
      password: password,
    };
    setLoading(true);
    axios
     .get(`/users/login?email=${users.email}&password=${users.password}`)
     .then((res) => {
      console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        navigati('/home');

      })
     .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false))
      


    
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
                <label htmlFor="">Email</label> <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="login_input">
                <label htmlFor="">Password</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="login_input_alt">
                <button type="submit">{loading ? 'loading....' : "SIGN IN"}</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
