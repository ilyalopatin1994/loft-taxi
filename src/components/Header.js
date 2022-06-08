import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/header.css'
import { ReactComponent as Logo } from '../img/logo.svg'
import { mapItemName, profileItemName, loginItemName, signOutItemName } from '../config';
import { AuthContext } from "./Authorization"

class Header extends Component {
  static propTypes = {
    changePageFunc: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = { activePage: 'Карта' };
  }

  // Смена страницы при нажатии кнопки в меню навигации
   logout = (logoutFunc) => {
    logoutFunc();
    this.props.changePageFunc(loginItemName);
  }

  render () {
    return (
      <AuthContext.Consumer>
        {({ logout }) => (
          <div className="header">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__navigation navigation-menu">
              <ul>
                <li className="navigation-menu__item"
                    onClick={() => this.props.changePageFunc(mapItemName)}>{mapItemName}</li>
                <li className="navigation-menu__item"
                    onClick={() => this.props.changePageFunc(profileItemName)}>{profileItemName}</li>
                <li className="navigation-menu__item"
                    onClick={() => this.logout(logout)}>{signOutItemName}
                </li>
              </ul>
            </div>
          </div>
        )
        }
      </AuthContext.Consumer>
    )
  }
}

export default Header;