import React from "react";
import { render } from '@testing-library/react';
import Header from "../components/Header";
import { AuthProvider } from "../components/Authorization";

let ProvidedHeader;

beforeAll(() => {
  ProvidedHeader = () => {
    return (<AuthProvider><Header changePageFunc={(page) => {
      console.log(page);
    }} /></AuthProvider>)
  }
})
describe("Header buttons", () => {
  describe("Truthy cases", () => {
    it("Button 'Карта' exists", () => {
      const { getByText } = render(<ProvidedHeader />);
      expect(getByText('Карта')).toBeTruthy();
    })
    it("Button 'Профиль' exists", () => {
      const { getByText } = render(<ProvidedHeader />);
      expect(getByText('Профиль')).toBeTruthy();
    })
    it("Button 'Выйти' exists", () => {
      const { getByText } = render(<ProvidedHeader />);
      expect(getByText('Выйти')).toBeTruthy();
    })
    it("Number of menu items in the header equals 3", () => {
      const { container } = render(<ProvidedHeader />);
      expect(container.querySelectorAll('.navigation-menu__item').length == 3).toBeTruthy()
    })
  })
  describe("Falthy cases", () => {
    it("Number of menu items in the header equals 4", () => {
      const { container } = render(<ProvidedHeader />);
      expect(container.querySelectorAll('.navigation-menu__item').length == 4).toBeFalsy()
    })

  })
})