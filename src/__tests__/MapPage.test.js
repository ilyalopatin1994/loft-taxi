import React from "react";
import { render } from "@testing-library/react";
import MapPage from "../components/MapPage"
import { AuthProvider } from "../components/Authorization"

let ProvidedMapPage;

beforeAll(() => {
  ProvidedMapPage = () => {
    return (<AuthProvider isLoggedIn={true}><MapPage /></AuthProvider>)
  }

})
describe("MapPage", () => {
  describe("Layout", () => {
    describe("truthy cases", () => {
      it("Map is hidden when not authorized", () => {
        const { queryByTestId } = render(<AuthProvider isLoggedIn={false}><MapPage /></AuthProvider>)
        expect(queryByTestId('map')).toBeNull();
      })
      it("Checking message for not authorized people", () => {
        const { queryByTestId } = render(<AuthProvider isLoggedIn={false}><MapPage /></AuthProvider>)
        expect(queryByTestId('notAuthorizedMessage').textContent)
          .toBe('Вы не вошли в систему! Страница доступна только авторизированным пользователям.');
      })
      // Этот код работать, не будет, т.к WebGL (внутри MapPage) требует особых браузерных расширений
      // it("Map is shown when authorization is active", () => {
      //   // Этот код работать, не будет, т.к MapPage требует особых расширений для работы WebGL
      //   const { queryByTestId } = render(<AuthProvider isLoggedIn={true}><MapPage /></AuthProvider>)
      //   expect(queryByTestId('map')).not.toBeNull();
      // })
    })
  })
})