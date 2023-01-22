import { formatDate, formatQuestion, generateSummary } from "./helpers";
import { _getUsers } from "./_DATA";

describe("formatDate", () => {
  it("will return formatted date with timestamp input", async () => {
    var timestamp = 1467166872634;
    var result = formatDate(timestamp);
    expect(result).toEqual("10:21PM | 6/28/2016");
  });
});

describe("formatQuestion", () => {
  it("will return formatted Question", async () => {
    var question = {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1467166872634,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    };
    var result = formatQuestion(question, null, "sarahedo");
    expect(result.author).toEqual("sarahedo");
    expect(result.optionOne.text).toEqual(
      "Build our new application with Javascript"
    );
    expect(result.optionTwo.text).toEqual(
      "Build our new application with Typescript"
    );
    expect(result.timestamp).toEqual("10:21PM | 6/28/2016");
  });
});

describe("generateSummary", () => {
  it("will return summary for leaderboard", async () => {
    var users = await _getUsers();
    var result = generateSummary(users);
    expect(result.length).toEqual(4);
    var user1 = result.filter((u) => u.username === "sarahedo")[0];
    expect(user1.answered).toEqual(4);
    expect(user1.created).toEqual(2);
    expect(user1.name).toEqual("Sarah Edo");
  });
});
