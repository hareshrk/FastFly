import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "red" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 14 }}
          >
          </IconButton>
          <Typography  variant="h4" component="div" sx={{ flexGrow: 2 }}>
            FASTFLY
          </Typography>
          <Button component={Link} to={'/viewpassenger'}font-family='Gruppo' cursive color="inherit">
            View Passenger
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}