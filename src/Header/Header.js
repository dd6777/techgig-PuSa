import classes from "./Header.module.scss";
import CartHeader from "./CartHeader";

const Header = () => {
  return (
    <div className={classes.topHeader}>
      <CartHeader />
    </div>
  );
};

export default Header;
