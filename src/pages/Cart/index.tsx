import { Box, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ICartProduct } from "../../utils/interfaces/cart-product";
import { useEffect } from "react";
import { cartRequest, deleteFromCart, editCart } from "../../redux/cart/action";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IDeleteFromCartPayload, IEditCartPayload } from "../../redux/cart/types";

const Cart : React.FC = () => {
    
    const cartProducts = useSelector((state:any)=>state.cartState.cartProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(cartRequest());
    }, []);

    const addQuantityhandler = (id:number) => {
        let product = cartProducts.find((product:ICartProduct)=>product.id==id);
       
        product = {...product, quantity:product.quantity+1};
       
       let payload : IEditCartPayload = {
        values : product,
        callback: onSuccess
       }

       dispatch(editCart(payload));
    };

    const removeQuantityhandler = (id:number) => {
        let product = cartProducts.find((product:ICartProduct)=>product.id==id);
        
        if(product.quantity == 1){
            let payload : IDeleteFromCartPayload = {
                values:{
                    id : id
                },
                callback: onSuccess
            };
            dispatch(deleteFromCart(payload))
        }
       else{
        product = {...product, quantity:product.quantity-1};
        let payload : IEditCartPayload = {
            values : product,
            callback: onSuccess
           }
    
           dispatch(editCart(payload));
       } 
    };

    const onSuccess = () => {
        dispatch(cartRequest());
    }

    return(
        <Box display='flex' columnGap={4} rowGap={3} flexWrap="wrap" justifyContent="center" mt={3}>
            {cartProducts && cartProducts.length > 0 && cartProducts.map((product:ICartProduct)=>
                <Card className="cart-card">
                    <Typography variant='h4'>
                    <b>{product.productName}</b>
                    </Typography>
                    <Typography variant='h6' mt={1}>
                        <b>Price: </b> {product.price}
                    </Typography>
                    <Typography variant='h6'>
                        <b>Color: </b> {product.color}
                    </Typography>
                    <Typography variant='h6'>
                        <b>Category: </b> {product.category}
                    </Typography>
                    <Typography variant='h6' display="flex" alignItems="center">
                        <b>Quantity: </b> <AddIcon color="success" sx={{cursor:"pointer"}} onClick = {()=>addQuantityhandler(product.id)}/>  {product.quantity}  <RemoveIcon color="error" sx={{cursor:"pointer"}} onClick={()=>removeQuantityhandler(product.id)}/>
                    </Typography>
                    <Typography variant='h6'>
                        <b>Total Price: </b> {product.quantity * product.price}
                    </Typography>
                </Card>
            )}
            {(!cartProducts || cartProducts.length ===  0 ) && 
                <Typography variant="h3">Your cart is empty !!</Typography>
            }
        </Box>
    );
};

export default Cart;