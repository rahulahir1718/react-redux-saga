import React from "react";
import {Box} from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../utils/enums/app-routes";

const AppSidebar : React.FC = () => {
    return (
        <Box height={100} display='flex' flexDirection='column' rowGap={1.5} className='sidebar'>
          <Box ml={2} mt={2} sx={{width:'100%'}}><NavLink to={AppRoutes.Products} className="nav-link" activeClassName="nav-link-active">Products</NavLink></Box>
          <Box ml={2} mt={2} sx={{width:'100%'}}><NavLink to={AppRoutes.Cart} className="nav-link" activeClassName="nav-link-active">My Cart</NavLink></Box>
          <Box ml={2} mt={2} sx={{width:'100%'}}><NavLink to={AppRoutes.ProductGrid} className="nav-link" activeClassName="nav-link-active">Product Grid</NavLink></Box>
          <Box ml={2} mt={2} sx={{width:'100%'}}><NavLink to={AppRoutes.CartGrid} className="nav-link" activeClassName="nav-link-active">Cart Grid</NavLink></Box>
       </Box>
    );
};

export default AppSidebar;
