import React, { useState, useContext } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import classes from "./auth.module.css";
import { auth } from "../../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from '../../DataProvider/DataProvider';
import {type} from '../../../Utility/action.type'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{user}, dispatch] = useContext(DataContext)

  console.log(user);
  // console.log(email, password);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {

          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
        })
     
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
        
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <form action="">
          <h2>Sign in or create account</h2>
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
            Sign in
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
            Create your Amazon Account
          </button>
        </form>
        {/* agrement */}
      </div>
    </section>
  );
}

export default Auth;
