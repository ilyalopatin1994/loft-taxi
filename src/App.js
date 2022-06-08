import React, { Component } from 'react';
import Header from './components/Header';
import MapPage from './components/MapPage';
import Profile from './components/Profile';
import Login from './components/Login';
import Registration from "./components/Registration";
import { AuthProvider } from "./components/Authorization";
import { mapItemName, profileItemName, registrationPage, loginItemName } from "./config";
import './styles/App.css';

class App extends Component {
  state = { activePage: mapItemName };

  changePage = (itemName) => {
    this.setState({ activePage: itemName })
  }

  pages = {
    [mapItemName]: <MapPage />,
    [profileItemName]: <Profile />,
    [registrationPage]: <Registration submitFunc={this.changePage} />,
    [loginItemName]: <Login submitFunc={this.changePage} />
  }

  render () {
    return (
      <>
        <AuthProvider>
        <Header changePageFunc={this.changePage} />
        <div className="mapWrapper">{this.pages[this.state.activePage]}</div>
        </AuthProvider>
      </>
    )
  }

}

export default App;
