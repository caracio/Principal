import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <Box className="carrinho">
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
