import React, { useState, useContext } from "react";
import Layout from "../../Layout/Layout";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./auth.module.css";
import { auth } from "../../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from '../../DataProvider/DataProvider';
import { type } from '../../../Utility/action.type';
import {CircleLoader, ClipLoader} from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  })

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  console.log(user);
  // console.log(email, password);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })    
        .catch((err) => {
          setError(err.message);

        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
        
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message)
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <form action="">
          <h2>Sign in or create account</h2>
          {
            navStateData?.state?.msg && (
              <small style={{padding:'5px', color: 'red', fontWeight:'bold', textAlign: 'center'}}>
                {navStateData?.state?.msg}
              </small>
            )
          }
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInBtn}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign in"}
          </button>
          <p>
            By signing in your agree to the Amazon Fake Clone condition of use &
            sale. Please see our Privecy Notice, our Cookies Notice and our
            interest Based Ads Notice.
          </p>
          {/* creat account button */}
          <button
            type="submit"
            onClick={authHandler}
            name="signup"
            className={classes.login_registerBtn}
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </form>
        {/* agrement */}
      </div>
    </section>
  );
}

export default Auth;
