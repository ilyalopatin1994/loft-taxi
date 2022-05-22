import React, { Component } from "react";
import Logo from "./logo"
import './styles/header.css'

const mapItemName = 'Карта';
const profileItemName = 'Профиль'
const signOutItemName = 'Выйти'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = { activePage: 'Карта' };
  }

  // Смена страницы при нажатии кнопки в меню навигации
  changePage = (page) => {
    if (this.state.activePage !== page) {
      this.setState({ activePage: page });
    }
  }

  render () {
    return (
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
                onClick={() => this.props.changePageFunc(signOutItemName)}>{signOutItemName}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;