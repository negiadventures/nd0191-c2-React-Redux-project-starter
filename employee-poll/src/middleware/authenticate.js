const authenticate = (store) => (next) => (action) => {
  const returnValue = next(action);
  console.log("auth:", store.getState());
  if(store.getState().authedUser ===''){
    console.log('error')
  }
  return returnValue;
};

export default authenticate;
