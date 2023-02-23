import React from 'react'
import style from './index.module.css'

export default function ToDoItem({ todo, completed }) {

    const completed_style = {
        border: completed ? '2px dashed green' : '2px dashed red'
       
    }

  return (
    <div className={style.todos_card} style={completed_style}> 
      <p>To do: { todo }</p>
      <p>Status: { completed ? 'done' : 'not done' }</p>
    </div>
  )
}