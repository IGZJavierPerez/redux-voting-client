export default ref => store => next => action => {
  if (action.firebase && action.firebase.preFn) {
    action.firebase.preFn(ref, store, next, action);
  }
  const result = next(action);
  if (action.firebase && action.firebase.postFn) {
    action.firebase.postFn(ref, store, next, action)(store.getState().toJS());
  }
  return result;
};
