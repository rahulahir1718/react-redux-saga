import {Box, Button, Card ,Typography} from '@mui/material'
import { IProduct } from '../../../utils/interfaces/product';
import { useSelector } from 'react-redux';
import { ICartProduct } from '../../../utils/interfaces/cart-product';

const ProductDetail : React.FC<{
    product : IProduct, 
    onAddToCart: (id:any) => void, 
    onRemoveFromCart: (id:any) => void, 
    onEdit: (id:any) => void,
    onDelete: (id:any) => void
}> = (props) => {

    const cartProducts = useSelector((state:any)=>state.cartState.cartProducts);

    const itemAddedInCart = cartProducts.find((product:ICartProduct)=>product.productId == props.product.id);

    return (
        <Card className="card">
            <Typography variant='h4'>
               <b>{props.product.productName}</b>
            </Typography>
            <Typography variant='h6' mt={1}>
                <b>Price: </b> {props.product.price}
            </Typography>
            <Typography variant='h6'>
                <b>Color: </b> {props.product.color}
            </Typography>
            <Typography variant='h6'>
                <b>Category: </b> {props.product.category}
            </Typography>
            <Box display='flex' alignItems='center' columnGap={0.5} mt={1}>
                <Box>
                    <Button variant="contained" onClick={()=>props.onEdit(props.product.id)}>
                        Edit
                    </Button>
                </Box>
                <Box>
                    <Button variant="contained" color='error' onClick={()=>props.onDelete(props.product.id)}>
                        Delete
                    </Button>
                </Box>
                <Box>
                    {itemAddedInCart && <Button variant="contained" color="error" onClick={()=>props.onRemoveFromCart(props.product.id)}>
                        Remove from cart
                    </Button>}
                    {!itemAddedInCart && <Button variant="contained" color="success" onClick={()=>props.onAddToCart(props.product.id)}>
                        Add to cart
                    </Button>} 
                </Box>
            </Box>
        </Card>
    );
};

export default ProductDetail;