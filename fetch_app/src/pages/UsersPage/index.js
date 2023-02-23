import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import { Link } from 'react-router-dom'
import AddUserForm from '../../components/AddUserForm'

export default function UsersPage() {
  return (
    <div>
        <Link to='/'>
        <button className='style_button'>Main Page</button>
        </Link>
        <AddUserForm />
        <UsersContainer />
    </div>
  )
}