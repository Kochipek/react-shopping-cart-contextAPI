import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <CardWrapper>
      <ProductImage
        src={product.image + "?v=" + product.id}
        alt={product.name}
      />
      <ProductName>{product.name}</ProductName>
      <ProductCardButtons>
      <ProductCardPrice>{formatCurrency(product.price)}</ProductCardPrice>
        {isInCart(product) && (
          <ButtonAddMore
            onClick={() => {
              increase(product);
            }}
            className="btn"
          >
            Add More
          </ButtonAddMore>
        )}
        
        {!isInCart(product) && (
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        )}
      </ProductCardButtons>
    </CardWrapper>
  );
};

//Styled Components
const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  flex: 1 1 auto;
  padding: 1.25rem;
  text-align: center;
  border-radius: 0.25rem;
  margin: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  margin: 0 auto 10px;
  max-height: 200px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
  @media (max-width: 768px) {
    max-height: 250px;
  }
  @media (max-width: 576px) {
    max-height: 200px;
  }
  @media (max-width: 375px) {
    max-height: 180px;
  }

`;

const ProductName = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin: 1rem;

`;

const ProductCardPrice = styled.h3`
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
  text-align: left;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const ProductCardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #1a1a1a;
    background-color: #fff;
    border: 2px solid #1a1a1a;
  }
`;

const ButtonAddMore = styled(Button)`
  background-color: #fff;
  border: 2px solid #1a1a1a;
  color: #1a1a1a;
  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
  }

`;

export default ProductCard;