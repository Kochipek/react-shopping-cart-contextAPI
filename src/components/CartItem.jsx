import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import { formatCurrency } from "../utils";
import TrashIcon from "../../public/assets/icons/trash-outline.svg";
import Plus from "../../public/assets/icons/add-circle-outline.svg";
import Minus from "../../public/assets/icons/remove-circle-outline.svg";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <SingleCartItem>
      <CartImage src={product.image} alt={product.name} />
      <div>
        <h5>{product.name}</h5>
        <p>{formatCurrency(product.price)}</p>
      </div>

      {/* Buttons */}
      <BtnContainer>
        <button
          onClick={() => increase(product)}
          className="btn"
        >
          <Icon src={Plus} alt="" />
        </button>

        <div>
          <p>Qty: {product.quantity}</p>
        </div>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <Icon src={Minus} alt="" />
            
          </button>
        )}
        
        {product.quantity >= 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <Icon src={TrashIcon} alt="" />
          </button>
        )}
      </BtnContainer>
    </SingleCartItem>
  );
};

//Styled Components

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  &:nth-child(1) {
    border-top: 1px solid gray;
  }
  h5{
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  p{
    font-size: 1rem;
  }
`;

const CartImage = styled.img`
  width: 8em;
  height: auto;
  padding-right: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 1.6rem;
  height: auto;
`;

export default CartItem;