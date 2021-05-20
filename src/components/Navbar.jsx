import React from 'react';
import StickyHeader from "react-sticky-header";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Navbar extends React.Component {
 
  render () {
    return (
      <StickyHeader>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </StickyHeader>
    )
  }
  
}