import React from 'react'
import style from './index.module.css'

export default function User({ name, role, email, avatar }) {
  return (
    <div className={style.users_cards}>
      <p>Name: { name }</p>
      <p>Role: { role }</p>
      <p>Email: { email }</p>
      <img src={ avatar } alt= 'User'/>
    </div>
  )
}