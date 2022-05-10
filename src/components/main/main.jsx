import React from 'react'
import Header from '../header/Header'
import './main-styles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const Main = () => {

    return (
        <div>
            <Header />

            <div className='body'>
                <div className='sidebar-filter'>
                    <p className='filter'>Filter</p>
                    <p className='categories'>Categories</p>

                    <div className='filter-item'>
                        <input type='checkbox' />
                        <p>Gardening</p>
                    </div>
                    <div className='filter-item'>
                        <input type='checkbox' />
                        <p>Plants</p>
                    </div>
                    <div className='filter-item'>
                        <input type='checkbox' />
                        <p>Seeds</p>
                    </div>
                    <div className='filter-item'>
                        <input type='checkbox' />
                        <p>Bulbs</p>
                    </div>
                    <div className='filter-item'>
                        <input type='checkbox' />
                        <p>Planters</p>
                    </div>

                    <div className='others'>
                        <p>Others</p>
                        <ExpandMoreIcon />
                    </div>

                    <div className='price-range'>
                        <p className='price-range-title'>Price Range</p>
                        <div className='top-div'>
                            <div className='min'>
                                <p>Min</p>
                            </div>
                            <div className='price'>
                                <p>$400</p>
                            </div>
                        </div>
                        <button className='bottom-button'>
                            <p>Set price</p>
                        </button>

                    </div>

                    <div className='rating'>
                        <h3>Rating</h3>

                        <div className='stars'>
                            <CheckBoxIcon style={{color:'#47a259', marginRight:'5px'}} />
                            <StarIcon style={{color:"gold"}}/>
                            <StarIcon style={{color:"gold"}}/>
                            <StarIcon style={{color:"gold"}}/>
                            <StarIcon style={{color:"gold"}}/>
                            <StarBorderIcon style={{color:"gold"}}/>
                            <p>above</p>
                        </div>
                    </div>

                    <div className='footer-banner'>
                        <h3>GET 30% OFF</h3>
                        <p>Share your referral<br/>and get discount</p>
                        <button>Share</button>
                    </div>
                    
                </div>
                <div className='center'>
                    <div className='search'>
                        <SearchIcon/>
                        <p>Monstera</p>
                        <CloseIcon className='close-icon'/>
                    </div>

                    <div className='search-results'>
                        <p>Search results for <span>"Monstera"</span></p>
                    </div>
               
                    <div className='sort'>
                        <p>Sort</p>
                        <div className='active'>
                            <p>Relevance</p>
                        </div>
                        <div className='sort-pill'>
                            <p>Popular</p>
                        </div>
                        <div className='sort-pill'>
                            <p>Most new</p>
                        </div>
                        <div className='sort-pill'>
                            <p>Price</p>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <p>div3</p>
                </div>
            </div>
        </div>
    )
}

export default Main