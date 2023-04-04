import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../Context/Cart/CartContext";
import Checkout from "../components/Checkout";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <Container>
      <Heading>
        <h1>
          Shopping Cart ({cartItems.length})
        </h1>
      </Heading>
      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>Your order has been placed and will be delivered to you within 24 hours.</p>
          <Link to="/">
            <ShopBtn onClick={clearCart}>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
      )}

      <CartWrapper>
        <CartItems>
          <h3>Cart Items</h3>
          {cartItems.length === 0 ? (
            <EmptyCart>Cart is empty</EmptyCart>
          ) : (
            <ul>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
          )}
        </CartItems>

        <CheckoutWrapper>
          {cartItems.length > 0 && <Checkout />}
        </CheckoutWrapper>
      </CartWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const Heading = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    span {
      font-size: 1.5rem;
      font-weight: 300;
      color: #555555;
    }
  }
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CartItems = styled.div`
  width: 70%;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const CheckoutWrapper = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 70%;
    margin-top: 3rem;
  }
`;

const EmptyCart = styled.h4`
  margin: 1rem;
  font-size: 1.2rem;
`;
const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;
  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const ShopBtn = styled.button`
  outline: none;
  border: 1px solid green;
  background-color: transparent;
  padding: 0.75rem;
  color: green;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;
export default Cart;