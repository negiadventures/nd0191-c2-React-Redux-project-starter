import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "../reducers";
import middleware from "../middleware";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
});

describe("Login", () => {
  it("will display a success message if the wrong creds are provided.", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    var inputUser = component.getByTestId("username", { name: "username" });
    fireEvent.change(inputUser, { target: { value: "sarahedo" } });
    expect(inputUser.value).toEqual("sarahedo");
    var inputPass = component.getByTestId("password");
    fireEvent.change(inputPass, { target: { value: "password123" } });
    expect(inputPass.value).toEqual("password123");
    var submitButton = component.getByTestId("submit-button");
    fireEvent(
      submitButton,
      new MouseEvent("click", {
        cancelable: true,
      })
    );
    expect(component.queryByText("Invalid Credentials. Try again.")).toBeNull();
  });

  it("will display a error message if the wrong creds are provided.", () => {
    var component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    var input = component.getByTestId("password");
    fireEvent.change(input, { target: { value: "wrongPass" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(
      component.getByText(/Invalid Credentials. Try again./i)
    ).toBeInTheDocument();
  });
});
