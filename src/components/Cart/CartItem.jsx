import { useCart } from "../../src/context/CartContext";
import { Item } from "../../src/components/Item/Item";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  return (
    <Item {...item}>
      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </Item>
  );
};
