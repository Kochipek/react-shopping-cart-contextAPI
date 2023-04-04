import styled from "styled-components";
import { formatCurrency } from "../utils";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const Checkout = () => {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);

  return (
    <Wrapper>
      <p>Total Items:</p>
      <h4>{itemCount}</h4>
      <p>Total Payment:</p>
      <h4>{formatCurrency(total)}</h4>

      <div>
        <CheckBtn onClick={handleCheckout}>CHECKOUT</CheckBtn>
        <ClearBtn onClick={clearCart}>CLEAR</ClearBtn>
      </div>
    </Wrapper>
  );
};

// Styled Components

const Wrapper = styled.div`
  margin-top: 3rem;
  border: 2px solid #E5E5E5;
  padding: 1.5rem;
  background-color: #FFFFFF;
  color: #444444;
  font-size: 16px;

  p,
  h4 {
    margin: 1rem;
    font-size: 18px;
    font-weight: bold;
    color: #555555;
  }
`;

const CheckBtn = styled.button`
  color: #FFFFFF;
  background-color: #4CAF50;
  border: none;
  padding: 1rem 2rem;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3E8E41;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #81C784;
  }
`;

const ClearBtn = styled(CheckBtn)`
  color: #444444;
  background-color: transparent;
  border: 2px solid #E5E5E5;

  &:hover {
    background-color: #E57373;
    border-color: #E57373;
    color: #FFFFFF;
  }

  &:focus {
    box-shadow: none;
    border-color: #81C784;
  }
`;
export default Checkout;