import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import {Badge, Box, TextField} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { productListRequest } from "../../redux/product/actions";
import { IProductPagePayloadValues } from "../../redux/product/types";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, cartRequest, deleteFromCart } from "../../redux/cart/action";
import { IProduct } from "../../utils/interfaces/product";
import { ICartProduct } from "../../utils/interfaces/cart-product";
import { IAddToCartPayload, IDeleteFromCartPayload } from "../../redux/cart/types";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../utils/enums/app-routes";

const Products : React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector((state:any)=>state.productListState.products);
    const cartProductsCount = useSelector((state:any)=>state.cartState.totalProducts);
    const cartProducts = useSelector((state:any)=>state.cartState.cartProducts);
    const[searchProduct, setSearchProduct] = useState<string>('');
    const history = useHistory();
   
    useEffect(()=>{

        const timer = setTimeout(()=>{
            getProducts();
        }, 500);

        return () => {
        clearTimeout(timer);
        }

    }, [searchProduct]);

    useEffect(()=>{
        dispatch(cartRequest());
    }, [])


    const searchProductChangeHandler = (event:any) => {
        setSearchProduct(event.target.value);
    };

    const onAddToCartSuccess = () => {
        dispatch(cartRequest());
    };

    const onDeleteFromCartSuccess = () => {
        dispatch(cartRequest());
    };

    const getProducts = () => {
        const values: IProductPagePayloadValues = {
            name : searchProduct
        };

        const payload = {
            values 
        };

        dispatch(productListRequest(payload));
    };


    const handleAddToCart = (id: number) => {
        let product = products.find((product:IProduct)=>product.id == id);

        let payload : IAddToCartPayload = {
            product : {
                ...product,
                id:null,
                productId: product.id,
                quantity: 1
            },
            callback: onAddToCartSuccess
        };

        dispatch(addToCart(payload));
    }

    const handleRemoveFromCart = (id:number) => {
        let payload : IDeleteFromCartPayload = {
            values:{
                id : cartProducts.find((product: ICartProduct)=>product.productId == id).id
            },
            callback: onDeleteFromCartSuccess
        };
        dispatch(deleteFromCart(payload))
    };

    const cartClickHandler = () => {
        history.push(AppRoutes.Cart);
    }
   
    return(
        <Box sx={{width:'100%'}} ml={2} mr={2}>
            <Box display='flex' justifyContent="space-between" alignItems="center" sx={{width:'100%'}}>
                <TextField
                    placeholder="Search by product name"
                    value={searchProduct}
                    onChange={searchProductChangeHandler}
                />
                <Badge badgeContent={cartProductsCount} showZero={true} color="primary">
                    <ShoppingCartIcon onClick={cartClickHandler} sx={{cursor:'pointer'}}/>
                </Badge>
            </Box>
            <Box display="flex" columnGap={4} rowGap={3} flexWrap="wrap" justifyContent="center" mt={3}> 
                {products && products.length > 0 && products.map((product:any)=>
                    <ProductDetail 
                    product={product} 
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                    />
                )}
            </Box>
        </Box>
    );
};

export default Products;