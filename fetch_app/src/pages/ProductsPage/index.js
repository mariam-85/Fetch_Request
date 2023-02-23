import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { Link } from 'react-router-dom'
import AddProductForm from '../../components/AddProductForm'


export default function ProductsPage() {
  return (
    <div>
        <Link to='/'>
        <button className='style_button'>Main Page</button>
        </Link>
        <AddProductForm />
        <ProductsContainer />
    </div>
  )
}