import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import {HeaderPrincipal, PlHeader, DetailPrincipal, DetailSectionHp, DetailButton, LinkPath, ProductImage, PlHeader1} from "../ProductListPage/styles.ts"
import { removeCart} from "../state/cart.slice";

const HomePage = () => {     
   const dispatch = useDispatch();
   const cart     = useSelector(state => state.cart.cart);

   const handleDeleteToCart = (id) => {
        dispatch(removeCart(id));
   }

    return(
        
    <HeaderPrincipal>
        <PlHeader>Home Page</PlHeader>
        <br/>
        <LinkPath>
            <Link to="/product-list">Go to Product List</Link>
            <p>|</p>
            <Link to="/check-out">Purchase Confirm</Link>
            <p>|</p>
            <Link to="/">Login</Link>
        </LinkPath>    
        <PlHeader1>shopping cart</PlHeader1>
        <DetailPrincipal>
        {
           cart && cart.length > 0  &&
              
            cart.map(citem => <DetailSectionHp key={citem.id}>
                <ProductImage alt={`${citem.title} Item`} src={citem.image}/>
                <div >Product  : {citem.title}</div>
                <div >Price    : {citem.price}</div>
                <div >Quantity : {citem.quantity}</div>
                <DetailButton 
                    size="small" 
                    variant="outlined"
                    onClick={(e) => handleDeleteToCart(citem.id)}
                >
                    Delete
                </DetailButton>
            </DetailSectionHp>)  
        }                
       </DetailPrincipal> 
    </HeaderPrincipal>);     
}
export default HomePage;
