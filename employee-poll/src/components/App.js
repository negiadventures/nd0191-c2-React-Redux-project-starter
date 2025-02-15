import React from "react";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInititaldata } from "../actions/shared";
import Home from "./Home";
import { LoadingBar } from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Error from "./Error";
import PropTypes from "prop-types";
const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    props.dispatch(handleInititaldata());
  }, [props]);
  return (
    <Fragment>
      <LoadingBar />
      {props.authedUser === "" || props.authedUser === null ? (
        <Login replace state={{ path: location.pathname }} />
      ) : (
        <div className="container">
          <div className="navigation">
            <Nav />
          </div>
          <hr />
          <div className="content">
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/leaderboard" element={<Leaderboard />}></Route>
              <Route
                path="/questions/:question_id"
                element={<Question />}
              ></Route>
              <Route path="/add" element={<NewQuestion />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});
App.propTypes = {
  authedUser: PropTypes.string,
};
export default connect(mapStateToProps)(App);
