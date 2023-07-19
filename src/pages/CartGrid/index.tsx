import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRequest } from "../../redux/cart/action";
import Grid, { IGridProps } from "../../components/Grid";
import { ICartRequestPayload } from "../../redux/cart/types";

const CartGrid : React.FC = () => {
    const cartProducts = useSelector((state:any)=>state.cartState.cartProducts);
    const dispatch = useDispatch();
    const totalCount = useSelector((state:any)=>state.cartState.totalCount);

    useEffect(()=>{
        getCartData();
    }, []);

    const handleGridChange = (sortBy:string, sortOrder:string , page: number, pageSize: number) => {
        getCartData(sortBy, sortOrder, page, pageSize);
    }

    const getCartData = (sortBy?:string, sortOrder?:string, page: number = 1, pageSize: number = 5) => {

        let payload : ICartRequestPayload  = {
            values : {
                sortBy : sortBy ? sortBy : undefined,
                sortOrder : sortOrder ? sortOrder : undefined,
                pageNo : page ? page : undefined,
                pageSize : pageSize ? pageSize : undefined
            }
        } ;

        dispatch(cartRequest(payload));
    }

    const gridProps: IGridProps = {
        gridData: cartProducts,
        totalCount: totalCount
    }
    
    return (
        <Grid gridProps={gridProps} onChange={handleGridChange}/>
    );
};

export default CartGrid;