import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const SellerForm = styled.form`
  display: inline;
`;
const SellerInput = styled.input`
  display: inline;
  margin-left:30px ;
  margin-top: 60px;

`;
const Div = styled.div`
    width: 500px;
    border: 1px solid black;
    background: #000;
    height: 600px;
`;
const SellerLogin=()=>{
    return(
        <div>
           <center>
           <Div>
            <SellerForm>
            <SellerInput type="text" 
            
            placeholder="Enter Your Name"/>
            <SellerInput type="text" placeholder="Enter Your Email"/>
            <SellerInput type="text" placeholder="Enter Your Address"/>
            <SellerInput type="text" placeholder="Enter Your Phone Number"/>
            <button>Register</button>

            </SellerForm>
           </Div>
           </center>
        </div>
    )
}
export default SellerLogin;