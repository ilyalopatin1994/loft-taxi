import React, { Component } from 'react';
import Header from './components/Header';
import MapPage from './components/MapPage';
import Profile from './components/Profile'
import Login from './components/Login'
import Registration from "./components/Registration"

const mapItemName = 'Карта';
const profileItemName = 'Профиль'
const registrationPage = 'Регистрация'
const loginItemName = 'Логин'


class App extends Component {
  state = { activePage: mapItemName };

  changePage = (itemName) => {
    this.setState({ activePage: itemName })
  }

  pages = {
    [mapItemName]: <MapPage submitFunc={this.changePage} />,
    [profileItemName]: <Profile submitFunc={this.changePage} />,
    [registrationPage]: <Registration submitFunc={this.changePage} />,
    [loginItemName]: <Login submitFunc={this.changePage} />
  }

  render () {
    return (
      <>
        <Header changePageFunc={this.changePage} />
        {this.pages[this.state.activePage]}
      </>
    )
  }

}

export default App;
