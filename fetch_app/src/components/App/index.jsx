import '../../style.css'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { getProducts } from '../../requests/products';
import { getUsers } from '../../requests/users';
import UsersPage from '../../pages/UsersPage';
import ProductsPage from '../../pages/ProductsPage';
import MainPage from '../../pages/MainPage';
import { Routes, Route } from 'react-router-dom'
import ToDoPage from '../../pages/ToDoPage';
import { getToDo } from '../../requests/todos';



export default function App() {

  const [ products, setProducts ] = useState([]);

  const [ users, setUsers ] = useState([]);

  const [ todos, setToDo ] = useState([]);


  useEffect(() => {
    getProducts(setProducts)
    getUsers(setUsers)
    getToDo(setToDo)
  }, []);

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem('products'));
  //   const users = JSON.parse(localStorage.getItem('users'));
  //   const todos = JSON.parse(localStorage.getItem('todos'));
  //   if (products) setProducts(products);
  //   if (users) setUsers(users);
  //   if (todos) setToDo(todos);
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  //   localStorage.setItem('users', JSON.stringify(users));
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [products, users, todos]);


  const createNewProduct = product => setProducts(prev => [...prev, product]);

  const createNewUser = user => setUsers(prev => [...prev, user]);

  const createNewToDo = todo => setToDo(prev => [...prev, todo]);



  return (
    <div>
  <Context.Provider value={{ products, users, createNewProduct, createNewUser, todos, createNewToDo  }}>
  <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/users' element={<UsersPage />} />
       <Route path='/products' element={<ProductsPage />} />
       <Route path='/todos' element={<ToDoPage />} />
  </Routes>
  </Context.Provider>
    </div>
  );
}

