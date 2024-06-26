import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api";
import { PiEyeFill } from "react-icons/pi";
import { PiEyeSlashFill } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [eye,setEye] = useState(false);
  console.log(eye);

  let navigati = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {
      email: email,
      password: password,
    };
    setLoading(true);
    axios
     .post(`/admins/login`,users)
     .then((res) => {
      console.log(res);
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
               <div className="int">
               <div className="int_a">
              <input
                  type={
                    eye ? "text" : "password" 
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{backgroundColor:'#E8F0FE'}}
                  required
                />
              </div>
              <div className="int_a" onClick={() => setEye(p => !p)} >
                {
                  eye ?     <PiEyeSlashFill className="eye"/>
                  : <PiEyeFill   className="eye"/>
                }
               
                </div>
                </div>
              </div>
              <Link to={'/forget'} style={{color:'gray',fontSize:'15px',marginLeft:'-250px'}}>FogetPassword</Link>
              <div className="login_input_alt">
                <button type="submit">{loading ? 'Loading....' : "SIGN IN"}</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
