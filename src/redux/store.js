import { configureStore, createReducer } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  count: 0
};

const reducer = createReducer(initialState, {
  INCREMENT: state => {
    state.count++;
  },
  DECREMENT: state => {
    state.count--;
  }
});

const store = configureStore({
  reducer,
  middleware: [thunk]
});

export default store;
