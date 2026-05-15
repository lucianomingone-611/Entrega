import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();

  const totalIems = getTotalItems();

  return (
    <nav>
      {}
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"}>
            Carrito
            {totalIems > 0 && <span className="incart">{totalIems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
