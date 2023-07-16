import classes from "./Counter.module.css";
import { useSelector, useDispatch, useStore } from "react-redux";
import { counterActions } from "../store/Redux-Store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);
  const store2 = useStore();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    console.log(store2.getState);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increase(5))}>
          increase by 5
        </button>
        <button onClick={() => dispatch(counterActions.inc())}>
          Increment
        </button>
        <button onClick={() => dispatch(counterActions.dec())}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
