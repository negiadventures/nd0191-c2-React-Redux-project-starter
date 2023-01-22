import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: reducer,
  middleware: middleware,
});
test("renders login page", () => {
  const component = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  expect(component.getByText(/Employee/i)).toBeInTheDocument();
  expect(component).toMatchSnapshot();
});
