import React, { useState } from "react";
import styles from "./Auth.module.css"
import { logIn, signUp } from "../../actions/AuthAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);



  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.left}>
        <div className={styles.webname}>
          <span className={styles.logo}>okkat</span>
          <p className={styles.info}>Conecte-se com o mundo</p>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.infoForm} onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Cadastre-se" : "Entrar"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="Nome"
                className={styles.infoInput}
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Sobrenome"
                className={styles.infoInput}
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          )}
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="Usuario"
                className={styles.infoInput}
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              required
              type="text"
              placeholder="Email"
              className={styles.infoInput}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className={styles.infoInput}
              placeholder="Senha"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className={styles.infoInput}
                name="confirmpass"
                value={data.confirmpass}
                placeholder="Confirme sua Senha"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *As senhas não coincidem
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Já tem uma conta? Entrar"
                : "Ainda não é cadastrado? Cadastre-se"}
            </span>
            <button
              className={styles.button}
              type="Submit"
              disabled={loading}
            >
              {loading ? "Carregando..." : isSignUp ? "Cadastrar" : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
