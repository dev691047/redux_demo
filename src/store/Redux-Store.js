import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    inc(state) {
      state.counter = state.counter + 1;
    },
    dec(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //{type:some_ubiqque_identifier ,payload}
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "inc") {
//     return {
//       counter: ++state.counter,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.count,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "dec") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };
