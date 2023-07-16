import classes from "./Header.module.css";
import { authActions } from "../store/Redux-Store";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {console.log(isAuth)}
      {/* {isAuth && ( */}
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(authActions.logout())}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </header>
  );
};

export default Header;
