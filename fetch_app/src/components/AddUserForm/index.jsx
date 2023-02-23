import React, { useContext } from 'react'
import { Context } from '../../context';
import style from './index.module.css'
import { addUser } from '../../requests/users';


export default function AddUserForm() {

    const { createNewUser } = useContext(Context);


     const submit_form = event => {
        event.preventDefault();
        const { name, role, email, avatar } = event.target;
        addUser(
        {
        name: name.value,
        role: role.value,
        email: email.value,
        avatar: avatar.value,
        password: 1234
        }, createNewUser);
        name.value = '';
        role.value = '';
        email.value = '';
        avatar.value = '';
    }

  return (
    <form className={style.add_user_form} onSubmit={submit_form}>
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='role' placeholder='Role' />
        <input type="text" name='email' placeholder='Email' />
        <input type="img" name='avatar' placeholder='Avatar' />
        <button>Add user</button>
    </form>
  )
}