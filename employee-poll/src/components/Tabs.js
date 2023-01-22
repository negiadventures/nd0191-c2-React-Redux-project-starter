import React from "react";
import { useState } from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Unanswered Questions
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Answered Questions
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab2" ? <AnsweredQuestions /> : <UnansweredQuestions />}
      </div>
    </div>
  );
};
export default Tabs;
