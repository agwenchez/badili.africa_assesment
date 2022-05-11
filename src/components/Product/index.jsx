import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import './product-styles.css'

const Product = ({product}) => {
  // console.log('Prod', product)
  return (
    <div className='product'>
      {product.favorite ? <FavoriteIcon className='favorited' /> : <FavoriteBorderIcon className='favorite' />}
      <img src={product.imageURL} alt="" />
      <p>{product.plantName}(L)</p>
      <div className='ratings'>
        <Rating name="read-only" value={product.rating} readOnly />
        <p>({product.totalReviews})</p>
      </div>

      <div className='add-to-cart'>
        <div className='product-price'>
          <p>Price</p>
          <h4>${product.price}</h4>
        </div>
        <div>
          <button className='button'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product