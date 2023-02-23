import React from 'react'
import { Link } from 'react-router-dom'
import AddToDoForm from '../../components/AddToDoForm'
import ToDoContainer from '../../components/ToDoContainer'


export default function ToDoPage() {
  return (
    <div>
        <Link to='/'>
        <button className='style_button'>Main Page</button>
        </Link>
        <AddToDoForm />
        <ToDoContainer />

    </div>
  )
}