import React from 'react'
import Header from '../header/Header'
import './main-styles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Rating from '@mui/material/Rating';
import { products } from '../../mock_data/products';

import Product from '../Product/'


const Main = () => {

    const [search, setSearch] = React.useState('')

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
                        <CheckBoxIcon className='checkbox' />
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
                            <CheckBoxIcon className='checkbox' />
                            <Rating name="read-only" value={4} readOnly />
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
                        <SearchIcon className='search-icon'/>
                        <input type="text"  value={search} onChange={e => setSearch(e.target.value)}/>
                        <CloseIcon className='close-icon'/>
                    </div>

                    <div className='search-results'>
                        <p>Search results for <span>"{search}"</span></p>
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

                    <div className='products'>
                        {products.map((product,index) => (
                            <Product/>
                        ))}
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