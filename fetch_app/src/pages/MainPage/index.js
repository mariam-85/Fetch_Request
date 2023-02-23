import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        <Link to='/products'>
        <button className='style_button'>Products</button>
        </Link>
        
        <Link to='/users'>
        <button className='style_button'>Users</button>
        </Link>

        <Link to='/todos'>
        <button className='style_button'>To do list</button>
        </Link>
    </div>
  )
}