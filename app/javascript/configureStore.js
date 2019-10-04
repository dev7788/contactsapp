import { createStore } from 'redux';

const initialState = {
  contacts: []
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    default:
      break;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}