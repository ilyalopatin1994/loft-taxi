import React, { Component } from "react";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = { isLoggedIn: false }

  login = (email, password) => {
    this.setState({ isLoggedIn: true })
    console.log('I am here')
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  }

  render () {
    const { children } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <AuthContext.Provider value={{ isLoggedIn, login: this.login, logout: this.logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

function AuthHoc (WrappedComponent) {
  return class extends Component {
    static displayName = 'AuthHoc';

    render () {
      return (
        <AuthContext.Consumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}


export { AuthContext, AuthProvider };