import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../index";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders login page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Employee/i)).toBeInTheDocument();
});
