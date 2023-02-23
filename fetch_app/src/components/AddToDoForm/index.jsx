import React, { useContext } from 'react'
import { Context } from '../../context';
import style from './index.module.css'
import { addToDo } from '../../requests/todos';


export default function AddToDoForm() {

     const { createNewToDo } = useContext(Context);

     const submit_form = event => {
        event.preventDefault();
        const { todo } = event.target;
        addToDo(
        {
        todo: todo.value,
        completed: false,
        userId: 26,
        }, createNewToDo);
        todo.value = '';
          }

  return (
    <form className={style.add_to_do_form} onSubmit={submit_form}>
        <input type="text" name='todo' placeholder='Task' />
        <button>Add to do</button>
    </form>
  )
}