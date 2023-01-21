import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: reducer,
  middleware: middleware,
});

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
