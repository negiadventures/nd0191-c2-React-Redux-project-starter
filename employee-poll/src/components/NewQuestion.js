import React from "react";
import serializeForm from "form-serialize";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const NewQuestion = (props) => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    props.dispatch(
      handleAddQuestion(values.optionOneText, values.optionTwoText)
    );
    navigate("/");
  };
  return (
    <div className="new-container">
      <h2 className="center">Would You Rather</h2>
      <p className="center">Create Your Own Poll</p>
      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <label>First Option</label>
          <input className="input-text" name="optionOneText" type="text" />
          <label>Second Option</label>
          <input className="input-text" name="optionTwoText" type="text" />
          <center>
            <button>Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default connect()(NewQuestion);
