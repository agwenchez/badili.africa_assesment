import React, {useState} from 'react'
import Header from '../header/Header'
import './main-styles.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const main = () => {
    const [rating, setRating] = useState(true)
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
                        <p>Rating</p>

                        <div className='stars'>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <p>div 2</p>
                </div>
                <div className='right'>
                    <p>div3</p>
                </div>
            </div>
        </div>
    )
}

export default main