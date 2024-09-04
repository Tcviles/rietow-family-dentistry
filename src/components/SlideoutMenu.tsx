// src/components/SlideoutMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const SlideoutMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <Grid style={{ position:'absolute', top: 15, left: 0, zIndex: 0 }}>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <div style={{ width: 250 }}>
          <List>
            <ListItem button component={Link} to="/" onClick={onClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/services" onClick={onClose}>
              <ListItemText primary="Our Services" />
            </ListItem>
            <ListItem button component={Link} to="/team" onClick={onClose}>
              <ListItemText primary="Meet The Team" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={onClose}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button component={Link} to="/insurance" onClick={onClose}>
              <ListItemText primary="Discount Plans" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Grid>
  );
};

export default SlideoutMenu;
