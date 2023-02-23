import React, { useContext } from 'react'
import { Context } from '../../context'
import ToDoItem from '../ToDoItem';
import style from './index.module.css'

export default function ToDoContainer() {

  const { todos } = useContext(Context);

  return (
    <div className={style.todos_container}>
      {
        todos.map(el => <ToDoItem key={el.id} {...el} />)
      }
    </div>
  )
}