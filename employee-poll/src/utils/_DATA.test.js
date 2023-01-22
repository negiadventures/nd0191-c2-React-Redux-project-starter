import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
  _getUsers,
} from "./_DATA";

describe("_saveQuestion", () => {
  it("will return saved question if input is correct", async () => {
    var question = {
      optionOneText: "drink tea",
      optionTwoText: "drink coffee",
      author: "test",
    };
    var result = await _saveQuestion(question);
    expect(result.author).toEqual("test");
    expect(result.optionOne.text).toEqual("drink tea");
    expect(result.optionTwo.text).toEqual("drink coffee");
  });

  it("will return error if input is correct", async () => {
    var question = {
      optionOneText: "drink tea",
      author: "test",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return saved answer if input is correct", async () => {
    var ans = {
      authedUser: "sarahedo",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionOne",
    };
    var result = await _saveQuestionAnswer(ans);
    expect(result).toEqual(true);
  });

  it("will return error if input is correct", async () => {
    var ans = { authedUser: "sarahedo", answer: "optionOne" };
    await expect(_saveQuestionAnswer(ans)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
