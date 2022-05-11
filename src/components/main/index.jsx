import React, { useState } from 'react'
import Header from '../Header'
import './main-styles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Rating from '@mui/material/Rating';
import { products } from '../../mock_data/products';
import { thumbnails } from '../../mock_data/thumbnails';
import Product from '../Product'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StraightenIcon from '@mui/icons-material/Straighten';
import PetsIcon from '@mui/icons-material/Pets';
import Fuse from 'fuse.js';


const Main = () => {

    const [readMore, setReadMore] =  useState(false)
    const [query, setQuery] = useState('')

    const fuse = new Fuse(products, {
        keys:[
            'plantName'
        ],
        includeScore:true
    })

    const results = fuse.search(query)
    const productResults = query ? results.map(result=>result.item) : products
    console.log("Results", productResults)

    const handleSearch = (e) =>{
        const value = e.target.value
        setQuery(value)
    }

    return (
        <div>
            <Header />

            <div className='body'>
                <div className='sidebar-filter'>
                    <p className='filter'>Filter</p>

                    <div className='categories-container'>
                        <p className='categories'>Categories</p>

                        <div className='filter-item'>
                            <input type='checkbox' />
                            <p>Gardening</p>
                        </div>
                        <div className='filter-item'>
                            <CheckBoxIcon style={{ fontSize: '20px' }} className='checkbox' />
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
                        <p>Share your referral<br />and get discount</p>
                        <button>Share</button>
                    </div>

                </div>
                <div className='center'>
                    <div className='search'>
                        <SearchIcon className='search-icon' />
                        <input type="text" value={query} onChange={handleSearch} />
                        <CloseIcon className='close-icon' onClick={()=>setQuery('')} />
                    </div>

                    <div className='search-results'>
                        <p>Search results for <span>"{query}"</span></p>
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
                        {productResults.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <div className='image-container'>
                        <CloseIcon className='close' />
                        <img className='image' src="https://www.ubuy.ke/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFlNG5IWERCaUwuX0FDX1NMMTUwMF8uanBn.jpg" alt="" />

                        <div className='thumbnails'>
                            {thumbnails.map((thumbnail, index) => (
                                <img key={index} className='thumbnail' height={20} width={30} src={thumbnail.image} alt="thumbnails" />

                            ))}
                        </div>
                    </div>

                    <div className='product-info'>
                        <h3>Monstera Deliciosa <br /> Variegata(Large)</h3>
                        {readMore ? <p className='about'>A species of flowering plant native to southern Mexico and Panama, Monstera deliciosa is a hardy and easy to care for plant known by many names, but most commonly the “Swiss cheese plant” due the unique development of ridges and holes on its more mature leaves, known as fenestrations.he “deliciosa” part of the plant’s name comes from the pineapple-like fruit it bears in its natural habitat!</p>: <p className='about'>A species of flowering plant native to southern Mexico and Panama, Monstera deliciosa is a hardy and easy to care for plant known by many names, but most commonly the “Swiss cheese plant” due the unique development of ridges and holes on its more mature leaves, known as fenestrations...<span onClick={()=>setReadMore(true)} style={{color:"#47a259", cursor:"pointer"}}>Read more</span></p>}
                    </div>

                    <div className='details-container'>
                        <div className='details'>
                            <p>Details</p>
                        </div>
                        <div className='reviews'>
                            <p>Reviews(32)</p>
                        </div>
                    </div>

                    <div className='details-info'>
                        <div className='height'>
                            <StraightenIcon/>
                            <p>120 cm</p>
                        </div>
                        <div className='conserve'>
                            <PetsIcon/>
                            <p>Animal Save</p>
                        </div>
                    </div>

                    <div className='product-footer'>
                        <FavoriteIcon className='fav'/>
                        <button>
                            <p>$345 -</p>
                            <p>Add to Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main