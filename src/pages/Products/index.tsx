import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import {Badge, Box, Button, TextField} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, productListRequest } from "../../redux/product/actions";
import { IDeleteProductPayload, IProductPagePayloadValues } from "../../redux/product/types";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, cartRequest, deleteFromCart } from "../../redux/cart/action";
import { IProduct } from "../../utils/interfaces/product";
import { ICartProduct } from "../../utils/interfaces/cart-product";
import { IAddToCartPayload, IDeleteFromCartPayload } from "../../redux/cart/types";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../utils/enums/app-routes";
import AddEditProduct from "./AddEditProduct";

const Products : React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector((state:any)=>state.productListState.products);
    const cartProductsCount = useSelector((state:any)=>state.cartState.totalProducts);
    const cartProducts = useSelector((state:any)=>state.cartState.cartProducts);
    const[searchProduct, setSearchProduct] = useState<string>('');
    const history = useHistory();
    const[isAddEditModalOpen, setIsEditModalOpen] = useState(false);
    const[editProductId, setEditProductId] = useState(null);
   
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
        const payload: IProductPagePayloadValues = {
            values : {
                name: searchProduct
            }
        };

        dispatch(productListRequest(payload));
    };

    const onProductCallSuccess = () => {
        setIsEditModalOpen(false);
        getProducts();
        setEditProductId(null);
    }

    const handleAddToCart = (id: any) => {
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

    const handleRemoveFromCart = (id:any) => {
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

    const onEdit = (id:any) => {
        setEditProductId(id);
        setIsEditModalOpen(true);
    }

    const onDelete = (id:any) => {
        let payload : IDeleteProductPayload = {
            values:{
                id : id
            },
            callback: onProductCallSuccess
        };
        dispatch(deleteProduct(payload))
    }
   
    return(
        <Box sx={{width:'100%'}} ml={2} mr={2}>
            <Box display='flex' justifyContent="space-between" alignItems="center" sx={{width:'100%'}}>
                <TextField
                    placeholder="Search by product name"
                    value={searchProduct}
                    onChange={searchProductChangeHandler}
                />
                <Box display='flex' alignItems='center' columnGap={2}>
                    <Button variant="contained" onClick={() => setIsEditModalOpen(true)}>Add Product</Button>
                    <Badge badgeContent={cartProductsCount} showZero={true} color="primary">
                        <ShoppingCartIcon onClick={cartClickHandler} sx={{cursor:'pointer'}}/>
                    </Badge>
                </Box>
            </Box>
            <Box display="flex" columnGap={4} rowGap={3} flexWrap="wrap" justifyContent="center" mt={3}> 
                {products && products.length > 0 && products.map((product:any)=>
                    <ProductDetail 
                    product={product} 
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                    onEdit = {onEdit}
                    onDelete= {onDelete}
                    />
                )}
            </Box>
            <AddEditProduct 
            isModalOpen={isAddEditModalOpen} 
            handleCloseModal={() => {setIsEditModalOpen(false); setEditProductId(null)}} 
            onAddEditCallSuccess={onProductCallSuccess}
            product={editProductId ? products.filter((product:IProduct)=>product.id == editProductId)[0] : null}/>
        </Box>
    );
};

export default Products;