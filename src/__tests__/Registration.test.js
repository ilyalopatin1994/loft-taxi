import React from "react";
import { render } from "@testing-library/react";
import Registration from "../components/Registration";
import { AuthProvider } from "../components/Authorization";
import Login from "../components/Login"

let ProvidedLogin;
beforeAll(() => {
  ProvidedLogin = () => {
    return (<AuthProvider><Registration submitFunc={(page) => {
      console.log(page)
    }} /></AuthProvider>)
  }
})


describe("Registration", () => {
  it("testing context", () => {
    const { container } = render(<ProvidedLogin />)

    const text = container.querySelector('.registrationForm__title').textContent;
    expect(text).toEqual('Регистрация')

  })
})