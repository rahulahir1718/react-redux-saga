import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IProductPagePayloadValues } from '../../redux/product/types';
import { productListRequest } from '../../redux/product/actions';
import { useEffect } from 'react';
import { IProduct } from '../../utils/interfaces/product';
import Grid, { IGridProps } from '../../components/Grid';

const ProductGrid : React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector((state:any)=>state.productListState.products);
    const totalCount = useSelector((state:any)=>state.productListState.totalCount);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = (sortBy?:string, sortOrder?:string, page: number = 1, pageSize: number = 5) => {
        const payload: IProductPagePayloadValues = {
            values:{
                sortBy : sortBy ? sortBy : undefined,
                sortOrder : sortOrder ? sortOrder : undefined,
                pageNo : page ? page : undefined,
                pageSize : pageSize ? pageSize : undefined
            }
        };

        dispatch(productListRequest(payload));
    };

    const handleGridChange = (sortBy:string, sortOrder:string , page: number, pageSize: number) => {
        getProducts(sortBy, sortOrder, page, pageSize);
    }

    const gridProps: IGridProps = {
        gridData: products,
        totalCount: totalCount
    }

    return (
        <Grid gridProps = {gridProps} onChange={handleGridChange}/>
    //     <TableContainer component={Paper} sx={{width:'90%'}}>
    //     <Table aria-label="simple table">
    //         <TableHead>
    //         <TableRow>
    //             <TableCell>Product Name</TableCell>
    //             <TableCell>Product Price</TableCell>
    //             <TableCell>Product Color</TableCell>
    //             <TableCell>Product Category</TableCell>
    //         </TableRow>
    //         </TableHead>
    //         <TableBody>
    //         {products.map((product:IProduct) => (
    //             <TableRow
    //             key={product.id}
    //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //             >
    //             <TableCell component="th" scope="row">
    //                 {product.productName}
    //             </TableCell>
    //             <TableCell >{product.price}</TableCell>
    //             <TableCell >{product.color}</TableCell>
    //             <TableCell >{product.category}</TableCell>
    //             </TableRow>
    //             ))}
    //         </TableBody>
    //     </Table>
    // </TableContainer>
    );
};

export default ProductGrid;