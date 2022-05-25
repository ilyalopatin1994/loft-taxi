import React, { Component } from "react";
import '../styles/login.css'

const mapItemName = 'Карта';
const registrationPage = 'Регистрация'

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  submitHandler = (event) => {
    event.preventDefault();
    // email, password записываются на будущее, для момента когда будем передавать их на сервер.
    const email = event.target[0].value;
    const password = event.target[1].value
    this.setState({ email, password });
    this.props.submitFunc(mapItemName);
  }

  render () {
    return (
      <div className="login-page-wrapper">
        <div className="loginForm">
          <div className="loginForm__title">Войти</div>
          <form className="loginFields" onSubmit={this.submitHandler}>
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
}

export default Login
