import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders the app component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
