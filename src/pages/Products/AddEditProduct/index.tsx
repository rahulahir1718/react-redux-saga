import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { IProduct } from "../../../utils/interfaces/product";
import { IAddEditProductRequestPayload } from "../../../redux/product/types";
import { addEditProductRequest } from "../../../redux/product/actions";
import { useEffect } from "react";

export interface IAddEditProductProps{
    isModalOpen : boolean,
    handleCloseModal : any,
    onAddEditCallSuccess : any,
    product?: IProduct
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const productColors = ["White", "Black", "Green" ,"Gray"];
  const productCategories = ["Home", "Footwear", "Lifestyle" ,"Kitchen"];


const AddEditProduct : React.FC<IAddEditProductProps> = (props) => {

    const dispatch = useDispatch();

    const validate = (values: any) => {
        const errors : any = {};
      
        if (!values.productName) {
          errors.productName = 'Required';
        } 

        if(!values.productPrice){
            errors.productPrice = "Required";
        }
        else if(parseInt(values.productPrice) <= 0){
            errors.productPrice = "Please enter a valid price"; 
        }
      
        return errors;
      };

    const formik = useFormik({
        initialValues: {
          productName: '',
          productPrice: 0,
          productColor: '',
          productCategory : ''
        },
        //validate,
        validationSchema: Yup.object({
            productName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            productPrice: Yup.number()
              .typeError('Price must be a number')
              .min(0, "Please enter valid price")
              .required('Required'),
            productColor: Yup.string()
                .oneOf(productColors, "Please select a valid product color")  
                .required('Please select product color'),
            productCategory: Yup.string()
                .oneOf(productCategories, "Please select a valid product category")  
                .required('Please select product category')    
          }),
        onSubmit: values => {
            let product : IProduct = {
                id: props.product ? props.product.id : null,
                productName: values.productName,
                price: values.productPrice,
                color: values.productColor,
                category: values.productCategory
            }

            let payload : IAddEditProductRequestPayload = {
                values: product,
                callback : props.onAddEditCallSuccess
            }

            dispatch(addEditProductRequest(payload));
        },
      });

    useEffect(()=>{
        if(props.product){
            formik.setFieldValue('productName', props.product.productName);
            formik.setFieldValue('productPrice', props.product.price);
            formik.setFieldValue('productColor', props.product.color);
            formik.setFieldValue('productCategory', props.product.category);
        }
    }, [props.product]);

    useEffect(()=>{
        if(props.isModalOpen == false){
            formik.resetForm();
        }
    }, [props.isModalOpen]);
    

    return(
        <Modal
        open={props.isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1} mb={2}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           {props.product ? 'Edit product' : 'Add product'}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={props.handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                
                <form onSubmit={formik.handleSubmit}>
                    <TextField 
                    id="productName"
                    type="text"
                    error = {formik.touched.productName  && formik.errors.productName ? true : false}
                    label="Name" 
                    variant="outlined" 
                    {...formik.getFieldProps('productName')}
                    sx={{width:'100%', marginBottom:'10px'}}
                    helperText = {formik.touched.productName && formik.errors.productName ? formik.errors.productName : null}
                    />

                    <TextField 
                    id="productPrice"
                    type="number"
                    error = {formik.touched.productPrice && formik.errors.productPrice ? true : false}
                    label="Price" 
                    variant="outlined" 
                    {...formik.getFieldProps('productPrice')}
                    sx={{width:'100%', marginBottom:'10px'}}
                    helperText = {formik.touched.productPrice && formik.errors.productPrice ? formik.errors.productPrice : null}
                    />

                    <FormControl fullWidth sx={{width:'100%', marginBottom:'10px'}} error={formik.touched.productColor && formik.errors.productColor ? true : false}>
                        <InputLabel id="color-label">Color</InputLabel>
                        <Select
                            labelId="color-label"
                            id="color"
                            label="Color"
                            error = {formik.touched.productColor && formik.errors.productColor ? true : false}
                            {...formik.getFieldProps('productColor')}
                        >
                            {productColors.map((color, index)=> <MenuItem value={color} key="index">{color}</MenuItem>)}
                        </Select>
                        {(formik.touched.productColor && formik.errors.productColor) && <FormHelperText>{formik.errors.productColor}</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth sx={{width:'100%', marginBottom:'10px'}} error={formik.touched.productCategory && formik.errors.productCategory ? true : false}>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            label="Category"
                            error = {formik.touched.productCategory && formik.errors.productCategory ? true : false}
                            {...formik.getFieldProps('productCategory')}
                        >
                            {productCategories.map((category, index)=> <MenuItem value={category} key="index">{category}</MenuItem>)}
                        </Select>
                        {(formik.touched.productCategory && formik.errors.productCategory) && <FormHelperText>{formik.errors.productCategory}</FormHelperText>}
                    </FormControl>

                   <Button variant="contained" type="submit">Save</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default AddEditProduct;