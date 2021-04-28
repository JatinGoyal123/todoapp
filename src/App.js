// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
function App() {
  let inittodo;
  if (localStorage.getItem('todos') === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    // console.log("helooo",todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const addtodo = (title, desc) => {
    let sno = todos.length !== 0 ? todos[todos.length - 1].sno + 1 : 0;
    // let sno = todos[todos.length-1].sno===undefined?0:todos[todos.length-1].sno +1;
    const newtodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    setTodos([...todos, newtodo]);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(newtodo);
  };
  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header title="Todos List" searchBar={true} />
      <AddTodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
