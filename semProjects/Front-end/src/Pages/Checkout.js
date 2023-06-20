import React from "react";
import styled from "styled-components";
import { useState, useRef } from 'react';


const Div = styled.div`
height: 600px;
width: 500px;
background: #000;
margin-left: 500px;
color: aliceblue;
font-size: larger;
 
`;
const Button = styled.button`
display: inline;
width: 80px;
font-weight: bold;
font-size: larger;
margin: 20px;
 
`;

const Checkout=()=>{

  const [quantity, setQuantity] = useState(1);
  const quantityRef = useRef(1);

  const handleIncrement = () => {
    const updatedQuantity = quantityRef.current + 1;
    setQuantity(updatedQuantity);
    quantityRef.current = updatedQuantity;
  };

  const handleDecrement = () => {
    if (quantityRef.current > 1) {
      const updatedQuantity = quantityRef.current - 1;
      setQuantity(updatedQuantity);
      quantityRef.current = updatedQuantity;
    }
  };

    return(
        <div>
          <Div>
          <h3>Checkout</h3>
          <img style={{height:"350px"}} src="./images/card1.jpg" alt="Product"/>
          <h3>price: 2600</h3>
          <Button onClick={handleDecrement}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleIncrement}>+</Button>
          <center> <button>Add to cart</button></center>
          </Div>
          

        </div>
    )
}
export default Checkout;