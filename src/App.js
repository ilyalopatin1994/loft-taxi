import React, { Component } from 'react';
import Header from './header';
import MapPage from './mapPage';
import Profile from './profile'
import Login from './login'
import Registration from "./registration"

const mapItemName = 'Карта';
const profileItemName = 'Профиль'
const registrationPage = 'Регистрация'
const loginItemName = 'Логин'

class App extends Component {
  state = { activePage: mapItemName };

  changePage = (itemName) => {
    this.setState({ activePage: itemName })
  }

  render () {

    if (this.state.activePage === mapItemName) {
      return (
        <>
          <Header changePageFunc={this.changePage}/>
          <MapPage />
        </>
      )
    } else if (this.state.activePage === profileItemName) {
      return (
        <>
          <Header changePageFunc={this.changePage}/>
          <Profile />
        </>
      )
    } else if (this.state.activePage === loginItemName) {
      return (
        <>
          <Login submitFunc={this.changePage}/>
        </>
      )
    } else {
      return (
        <>
          <Registration submitFunc={this.changePage}/>
        </>
      )
    }
  }

}

export default App;
