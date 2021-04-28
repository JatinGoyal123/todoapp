// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
function App() {
  const onDelete=(todo)=>{

  // console.log("helooo",todo);
  setTodos(todos.filter(e=>{
    return e!==todo;
  }))
  
  console.log(todos);
}
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to market",
      desc:"You go.."
    },
    {
      sno:2,
      title:"Go to bank",
      desc:"You went"
    },
    {
      sno:3,
      title:"Go to ghat",
      desc:"You gone.."
    }
  ]);
  return ( 
    <>
    <Header title="Todos List" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
   );
}

export default App;
