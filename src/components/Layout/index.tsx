import { Box } from "@mui/material";
import React from "react";
import AppHeader from "../Header";
import AppSidebar from "../Sidebar";
import Routes from "../PrivateRoute";

const Layout : React.FC = () => {
    return (
        <Box display="flex">
            <Box>
                <AppHeader/>
            </Box>
            <Box display="flex" sx={{width:'100%', marginTop:'64px'}}>
                <Box>
                    <AppSidebar/>
                </Box>
                <Box sx={{width:'-webkit-fill-available'}} display="flex" justifyContent="center" mt={2}>
                    <Routes/>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
