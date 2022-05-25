import React, { Component } from "react";
import '../styles/registration.css'

const mapItemName = 'Карта';
const loginItemName = 'Логин'

class Registration extends Component {
  constructor (props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  submitHandler = (event) => {
    event.preventDefault();
    // email, password записываются на будущее, для момента когда будем передавать их на сервер
    const email = event.target[0].value;
    const password = event.target[1].value
    this.setState({ email, password });
    this.props.submitFunc(mapItemName);
  }

  render () {
    return (
      <div className="wrapper">
        <div className="registrationForm">
          <div className="registrationForm__title">Регистрация</div>
          <form className="registrationFields" onSubmit={this.submitHandler}>
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
}

export default Registration
