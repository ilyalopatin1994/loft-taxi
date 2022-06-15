import React from "react";
import Login from "../components/Login"
import { AuthContext, AuthProvider } from "../components/Authorization"
import { render, fireEvent } from "@testing-library/react";

let ProvidedLogin;
let ProvidedMapPage;

beforeAll(() => {
  ProvidedLogin = () => {
    return (<AuthProvider><Login submitFunc={(page) => {
      console.log(page)
    }} /></AuthProvider>)
  }
})

describe("Login form", () => {
  // describe("Layout", () => {
  //   it("Checks if login form has a login button", () => {
  //     const {getByTestId } = render(<ProvidedLogin />);
  //     expect(getByTestId('loginButton')).toBeTruthy();
  //   })
  // })
  describe("Functionality", () => {
    describe("on mouse click", () => {
      describe("truthy cases", () => {
        it("changes isLoggedIn to true", () => {
          const { getByTestId } = render(<ProvidedLogin />);
          const { queryByTestId } = render(<ProvidedMapPage />)
          const form = getByTestId('loginForm');
          console.log(form)
          fireEvent.submit(form, { target: [{ value: 'Илья' }, { value: 'Пароль' }] })
        })
      })
    })
  })
})