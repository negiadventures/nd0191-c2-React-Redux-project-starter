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
    timestamp:formatDate(timestamp),
    optionOne,
    optionTwo,
    avatar: avatarURL,
    author,
    answers,
  };
}
