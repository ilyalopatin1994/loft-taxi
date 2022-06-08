import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/login.css';
import { mapItemName, registrationPage } from "../config";
import { AuthContext } from "./Authorization"

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  submitHandler = (event, login) => {
    event.preventDefault();
    // email, password записываются на будущее, для момента когда будем передавать их на сервер.
    const email = event.target[0].value;
    const password = event.target[1].value
    this.setState({ email, password });
    login(email, password);
    this.props.submitFunc(mapItemName);
  }

  render () {
    return (
      <AuthContext.Consumer>
        {({ login }) => (
          <div className="login-page-wrapper">
            <div className="loginForm">
              <div className="loginForm__title">Войти</div>
              <form className="loginFields" onSubmit={(e) => this.submitHandler(e, login)}>
                <label id="email">
                  Email
                  <input name="email" type="text" />
                </label>

                <label id="password">
                  Пароль
                  <input name="password" type="password" />
                </label>
                <div className="rememberPassword">
                  <a href="#">Забыли пароль?</a>
                </div>
                <div className="centerWrapper">
                  <input type="submit" className="submitButton" value="Войти" />
                </div>
              </form>

              <div className="centerWrapper">
                <div className="registrationLink">Новый пользователь?
                  <span className="registrationLink registrationLink--active"
                        onClick={() => this.props.submitFunc(registrationPage)}> Регистрация</span>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </AuthContext.Consumer>
    )
  }
}

Login.propTypes = {
  submitFunc: PropTypes.func.isRequired
}

export default Login;
