import React from 'react';
import './style.js';
import { NavbarSection, Logo, LogoText, UlList, ListItem, ListItemA, ListItemLink } from './style.js';

const Navbar = () => {
    return (

      <NavbarSection>
          
        <div className="container">
            
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          <UlList>
              <ListItem><ListItemLink to="/">Home</ListItemLink></ListItem>
              <ListItem><ListItemA href="#">Work</ListItemA></ListItem>
              <ListItem><ListItemA href="#">Portfolio</ListItemA></ListItem>
              <ListItem><ListItemA href="#">Resume</ListItemA></ListItem>
              <ListItem><ListItemA href="#">About</ListItemA></ListItem>
              <ListItem><ListItemLink to="/contact">Contact</ListItemLink></ListItem>
          </UlList>
            
        </div>
          
      </NavbarSection>
    );
};

export default Navbar;
