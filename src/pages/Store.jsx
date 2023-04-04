import { products } from "../data";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <Heading>
        <h1>Browse the Store!</h1>
        <p>Or, go to my <b><a href="https://github.com/Kochipek">GitHub repo</a></b> and check how I created this using the Context API for the first time!</p>      </Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

//Styled Components

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  color: #EFBE2C
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export default Store;