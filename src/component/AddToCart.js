import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { Button } from "../Styles/Button";
import { useCartContext } from "../context/Cartcontext";
// import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setcolor] = useState(colors[0]);
  const [amount, setamount] = useState(1);
  const setIncrease = () => {
    amount < stock ? setamount(amount + 1) : setamount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: curColor }}
                onClick={() => {
                  setcolor(curColor);
                }}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Link to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        {/* <Link to="/cart"> */}
        <Button className="btn">Add To Cart</Button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
