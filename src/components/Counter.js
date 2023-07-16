import classes from "./Counter.module.css";
import { useSelector, useDispatch, useStore } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);
  const store2 = useStore();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
    console.log(store2.getState);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch({ type: "increase", count: 5 })}>
          increase by 5
        </button>
        <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
        <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
