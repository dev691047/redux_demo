import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "inc") {
    return {
      counter: ++state.counter,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.count,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
