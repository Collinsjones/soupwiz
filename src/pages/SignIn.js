import React from 'react'
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/Authprovider"
import background from "../assets/catfish.jpg";

import { Link } from 'react-router-dom';





const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])


  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    // e.preventDefualt(); 
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  };


  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
        <>
          {success ? (
            <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/">Go to Home</Link>
                    </p>
            </section>
        
          ) :(
          <section className="register">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
             
              <button>
                Log In
              </button>
            </form>
            <p>Don't have an account?</p>
            <span>
              <Link to="/register">Sign Up</Link>
            </span>
          </section>
          )}
        </>

    </div>
  )
}

export default SignIn