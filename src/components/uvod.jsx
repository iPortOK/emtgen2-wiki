import React from 'react';
import {AppBar, Toolbar, Typography, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import './uvod.css';

const Uvod = () => {
  return (
    <AppBar className="pruhledny-header" position="static" style={{ backgroundColor: 'transparent', position: 'relative' }}>
      <div className="background-overlay" />
      <Toolbar className="center-toolbar">
        <Hidden mdUp>
          <div className="logo-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img className="logo small-logo" src="./logo.png" alt="Logo" />
            <Typography className="title small-design">WIKIPEDIA</Typography>
            </Link>
          </div>
        </Hidden>
        <Hidden mdDown>
          <div className="logo-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img className="logo big-logo" src="./logo.png" alt="Logo" />
            <Typography className="title design">WIKIPEDIA</Typography>
            </Link>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Uvod;
