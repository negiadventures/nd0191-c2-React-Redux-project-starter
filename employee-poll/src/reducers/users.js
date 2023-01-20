import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      console.log("defa state", state);
      console.log("defa state", action);
      return state;
  }
}
