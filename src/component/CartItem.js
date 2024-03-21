import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/Cartcontext";

const CartItem = ({ id, name, color, price, amount, image }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name ">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div className="color-style" style={{ background: color }}></div>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* Quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
      {/* SubTotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
