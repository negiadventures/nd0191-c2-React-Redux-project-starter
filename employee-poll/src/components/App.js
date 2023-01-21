import React from "react";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInititaldata } from "../actions/shared";
import Home from "./Home";
import { LoadingBar } from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Error from "./Error";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInititaldata());
  }, [props]);
  return (
    <Fragment>
      <LoadingBar />
      {props.authedUser === "" || props.authedUser === null ? (
        <Login />
      ) : (
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/leaderboard" element={<Leaderboard />}></Route>
            <Route path="/question/:id" element={<Question />}></Route>
            <Route path="/add" element={<NewQuestion />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(App);
