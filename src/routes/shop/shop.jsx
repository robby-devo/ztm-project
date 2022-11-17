import React from 'react'
// import SHOP_DATA from "../../shop-data.json"

import { useContext } from 'react'
import ProductCard from '../../components/product-card/product-card'

import "./shop.styles.scss";

import { ProductsContext } from '../../contexts/products.context'
const Shop = () => {

  const {products} =useContext(ProductsContext)
  return (
    <div className='products-container'>

      {products.map((product)=>{
        return (
          <div key={product.id}>
            <ProductCard product=
            {product} />
          </div>

        )
      })}
    </div>
  )
}

export default Shop