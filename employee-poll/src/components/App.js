import React from "react";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInititaldata } from "../actions/shared";
import Home from "./Home";
import { LoadingBar } from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Leaderboard from "./Leaderboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInititaldata());
  }, [props]);
  return (
    <Fragment>
      <LoadingBar />

      {props.loading === true ? (
        <Login />
      ) : (
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/leaderboard" element={<Leaderboard />}></Route>
            <Route
              path="/question/:id"
              element={<UnansweredQuestion />}
            ></Route>
            <Route path="/add" element={<NewQuestion />}></Route>
          </Routes>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
