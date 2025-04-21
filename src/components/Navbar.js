import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#5593FE' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}
        >
          Brain Bloom
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>Home</Button>
        <Button color="inherit" component={Link} to="/games" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>Games</Button>
        <Button color="inherit" component={Link} to="/exercises" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>Exercises</Button>
        <Button color="inherit" component={Link} to="/ayurveda" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>Ayurveda</Button>
        <Button color="inherit" component={Link} to="/brain-model" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>3D Brain Model</Button> {/* Fixed the route */}
        <Button color="inherit" component={Link} to="/storytelling" sx={{ fontFamily: 'Faculty Glyphic, sans-serif', color: '#FFFFFF' }}>Storytelling</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
