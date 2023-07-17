import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AppHeader : React.FC = () => {
    return (
        <AppBar component="nav">
            <Toolbar>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                Welcome
                </Typography>
            </Toolbar>
      </AppBar>
    );
};

export default AppHeader;
