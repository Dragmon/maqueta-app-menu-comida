import React from 'react'
import ListProducts from '../components/ListProducts'
import HeaderProduct from '../components/HeaderProduct'
import AddCart from '../components/AddCart'
import DescripctionProduct from'../components/DescripctionProduct'

const Product = () => {
  return (
    <>
      <HeaderProduct/>
      <AddCart />
      <DescripctionProduct />
      <ListProducts />
    </>
  )
}

export default Product
