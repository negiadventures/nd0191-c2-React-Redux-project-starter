export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, user, authedUser) {
  const { id, timestamp, optionOne, optionTwo, author } = question;
  const { name, avatarURL, answers } = user;

  return {
    name,
    id,
    timestamp: formatDate(timestamp),
    optionOne,
    optionTwo,
    avatar: avatarURL,
    author,
    answers,
  };
}

export function generateSummary(users) {
  const summary = [];
  Object.keys(users).forEach((u) => {
    summary.push({
      username: users[u].id,
      name: users[u].name,
      avatar: users[u].avatarURL,
      answered: Object.keys(users[u].answers).length,
      created: users[u].questions.length,
    });
  });
  return summary.sort(function (a, b) {
    var aAns = a.answered;
    var bAns = b.answered;
    var aCreated = a.created;
    var bCreated = b.created;

    if (aAns === bAns) {
      return bCreated < aCreated ? -1 : bCreated > aCreated ? 1 : 0;
    } else {
      return bAns < aAns ? -1 : 1;
    }
  });
}
