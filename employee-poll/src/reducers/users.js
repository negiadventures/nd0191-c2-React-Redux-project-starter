import { RECEIVE_USERS } from "../actions/users";
import { ANSWER_QUESTION } from "../actions/questions";
export default function users(state = {}, action) {
  const { authedUser, answer, qid } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
