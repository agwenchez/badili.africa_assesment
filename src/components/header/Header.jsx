import React from 'react'
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {

  return (
    <div className='container'>
        <div>
            <p className='header-title'>OYOTEE</p>
        </div>

        <div className='nav-menu'>
            <p style={{borderBottom:'2px solid green', color:'black'}}>Shop</p>
            {/* <div className='underline'>123</div> */}
            <p>Plant Care</p>
            <p>Workshops</p>
            <p>Blogs</p>
            <FontAwesomeIcon icon="fa-light fa-bag-shopping" />
        </div>

        <div className='icons-right'>
            <div className='cart'>
                <ShoppingBagOutlinedIcon />
                <p>5</p>
            </div>
            <FavoriteBorderIcon/>
            <img src="https://image.shutterstock.com/image-photo/indoor-portrait-beautiful-brunette-young-260nw-640005220.jpg" alt="" />
        </div>
    </div>
  )
}

export default Header