import React, { useContext } from 'react'
import { Context } from '../../context';
import style from './index.module.css'
import { addProduct } from '../../requests/products';


export default function AddProductForm() {

     const { createNewProduct } = useContext(Context);

     const submit_form = event => {
        event.preventDefault();
        const { title, description, price } = event.target;
        addProduct(
        {
        title: title.value,
        description: description.value,
        price: price.value,
        categoryId: 1,
        images: ["https://placeimg.com/640/480/any"]
        }, createNewProduct);
        title.value = '';
        description.value = '';
        price.value = '';


    }

  return (
    <form className={style.add_product_form} onSubmit={submit_form}>
        <input type="text" name='title' placeholder='Product title' />
        <input type="text" name='description' placeholder='Product description' />
        <input type="text" name='price' placeholder='Product price' />
        <button>Add product</button>
    </form>
  )
}

