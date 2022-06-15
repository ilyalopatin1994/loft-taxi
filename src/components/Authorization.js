import React, { Component } from "react";
import PropTypes from "prop-types"

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {isLoggedIn: this.props.isLoggedIn}
  }

  login = (email, password) => {
    this.setState({ isLoggedIn: true })
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

AuthProvider.propTypes = {
  isLoggedIn: PropTypes.bool
}


AuthProvider.defaultProps = {
  isLoggedIn: false
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