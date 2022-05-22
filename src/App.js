import React, { Component } from 'react';
import Header from './header';
import MapPage from './mapPage';
import Profile from './profile'
import Login from './login'

const mapItemName = 'Карта';
const profileItemName = 'Профиль'

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
    } else {
      return (
        <>
          <Login />
        </>
      )
    }
  }

}

export default App;
