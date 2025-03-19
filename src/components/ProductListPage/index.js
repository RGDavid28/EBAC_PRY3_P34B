import React, { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems} from "../state/items.slice";
import { addCart } from "../state/cart.slice.js"
import { IDLE } from "../state/status";
import { ProductosSection, ProductElement, ProductImage, ProductTitle, ProductInfo, ProductPrice,
         PlHeader, DetailButton,LinkPath} from "./styles.ts";

const ProductListPage = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.item.items);
    const status   = useSelector(state => state.item.status);

    useEffect(() => {
            status === IDLE && dispatch(fetchItems());
    }, [dispatch,status])
    
    const handleAddToCart = (product) => {

        dispatch(addCart(product));
    }

    return <main>
                <PlHeader>Product List</PlHeader>
                <br/>
                <LinkPath>
                    <Link to="/home-page">See the Cart</Link>
                </LinkPath>    
                <br/>

            <div>
                {
                    products && products.length > 0 &&
                <ProductosSection>
                   {products.map(product =>
                        
                        <ProductElement key={product.id}>
                                <ProductImage
                                    alt={`${product.title} Item`}
                                    src={product.image}
                                />
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductInfo>category    {product.category}</ProductInfo>
                                <ProductInfo>Description {product.description}</ProductInfo>
                                <ProductPrice precio={Number(product.price)}>Price       <span>{product.price}</span></ProductPrice>
                                <DetailButton 
                                    aria-label = "Click for send to product car"
                                    size="small" 
                                    variant="outlined"
                                    onClick={(e) => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </DetailButton>
                        </ProductElement>        
                    )}
                </ProductosSection>
                }    
            </div>
        </main>  
}

export default ProductListPage;