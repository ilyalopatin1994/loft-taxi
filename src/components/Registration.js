import React, { Component, useState, useContext } from "react";
import '../styles/registration.css'
import { loginItemName, mapItemName } from "../config";
import PropTypes from "prop-types"
import { AuthContext } from "./Authorization"

const Registration = ({ submitFunc }) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const contextProps = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // email, password записываются на будущее, для момента когда будем передавать их на сервер
    const email = event.target[0].value;
    const password = event.target[1].value;
    setEmail(email);
    setPassword(password);
    contextProps.login(email, password);

    submitFunc(mapItemName);
  }

  return (
    <div className="registration-wrapper">
      <div className="registrationForm">
        <div className="registrationForm__title">Регистрация</div>
        <form className="registrationFields" onSubmit={submitHandler}>
          <label id="email">
            Email*
            <input name="email" type="text" required />
          </label>

          <label id="fullname">
            Как Вас зовут?*
            <input name="fullname" type="text" required />
          </label>

          <label id="password">
            Придумайте пароль*
            <input name="registration" type="password" required />
          </label>
          <div className="rememberPassword">
            <a href="#">Забыли пароль?</a>
          </div>
          <div className="centerWrapper">
            <input type="submit" className="submitButton" value="Войти" />
          </div>
        </form>

        <div className="centerWrapper">
          <div className="loginLink">Новый пользователь?
            <span className="loginLink loginLink--active"
                  onClick={() => this.props.submitFunc(loginItemName)}> Войти</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Registration.propTypes = {
  submitFunc: PropTypes.func.isRequired
}

export default Registration