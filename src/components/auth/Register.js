import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import "./auth.css";
import { useState } from "react";

export const Register = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    if (email === "" || password === "" || repeatPassword === "") {
      setErr("Please fill all the fields");
      return;
    }

    if (password !== repeatPassword) {
      setErr("Your password and confirmation password do not match");
      return;
    }

    setLoading(true);
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
          setLoading(false);
        })
        .catch((err) => {
          setErr(err.message);
          setLoading(false);
        });
    });
  };

  return (
    <form className="auth" onSubmit={onRegister}>
      <h3>Register Here</h3>
      <label htmlFor="email"></label>
      <input type="text" placeholder="Email" id="email" name="email" />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <label htmlFor="repeatPassword"></label>
      <input
        type="password"
        placeholder="Repeat Password"
        id="repeatPassword"
        name="repeatPassword"
      />
      <button type="submit">{loading ? "Loading..." : "Register"}</button>
      <p className="errors">{err}</p>
    </form>
  );
};
