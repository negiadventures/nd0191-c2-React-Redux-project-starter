export const SET_AUTH_USER = "SET_AUTH_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}
