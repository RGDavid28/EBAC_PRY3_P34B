import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {HeaderPrincipal, PlHeader, ConfirmPrincipal, HeaderDescription, HeaderRight, HeaderLeft,
        DataSection, DataLeft, DataRight, BoxButton, GroupButton, Totales } from "../ProductListPage/styles.ts"
import { clearCart } from "../state/cart.slice";

const PurchaseConfirm = () => {     
   const dispatch = useDispatch();
   const cart     = useSelector(state => state.cart.cart);

   
   const totalPurchase = (cart) => {
     let total = 0
     cart.forEach(item => {
       total = total + (item.quantity * item.price);
     })
     return total.toFixed(2)
   }

   const totalPurchaseData = totalPurchase(cart); 

   const navigate = useNavigate();

   const handleDeleteAllToCart = () => {
         dispatch(clearCart(cart));
         navigate("/home-page");
   }
   const returnHomePage = () => {
         navigate("/home-page");
   }
    return(
        
    <HeaderPrincipal>
        <PlHeader>Purchase Confirm</PlHeader>
        <br/>
          <ConfirmPrincipal>
            <HeaderDescription>
                <HeaderLeft>Product</HeaderLeft>
                <HeaderRight>Price</HeaderRight>
                <HeaderRight>Quantity</HeaderRight> 
           </HeaderDescription>      
            {
            cart && cart.length > 0  &&
                
                    cart.map(citem => <DataSection key={citem.id}>
                    
                    <DataLeft>{citem.title}</DataLeft>
                    <DataRight>{citem.price.toFixed(2)}</DataRight>
                    <DataRight>{citem.quantity}</DataRight>  
                </DataSection>)  
            }
            <Totales>Purchase Total : {totalPurchaseData}</Totales>   
            <BoxButton>
                <GroupButton size="small" variant="outlined" onClick={(e) => handleDeleteAllToCart(cart)}>Purchase Confirm</GroupButton> 
                <GroupButton onClick={(e) => returnHomePage()}>Go Home Page </GroupButton>       
            </BoxButton>            
       </ConfirmPrincipal> 
    </HeaderPrincipal>);     
}
export default PurchaseConfirm;
