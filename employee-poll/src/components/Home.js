import { connect } from "react-redux";
import React from "react";
import Tabs from "./Tabs";
const Home = () => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

export default connect()(Home);
