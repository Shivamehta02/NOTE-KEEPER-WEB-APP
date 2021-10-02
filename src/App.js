import './App.css';
import Header from "./MyComponents/Header";
import { AddTodo }  from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { About } from "./MyComponents/About";

import React, { useState,useEffect } from 'react';//importing from documentation react hooks/statehooks
import {//for react routing
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App(todo) {
  // let variable = SHIVA;

  let initTodo;
if (localStorage.getItem("todos")===null) {
  
    initTodo = [];
}else{

  initTodo = JSON.parse(localStorage.getItem("todos"));

}

const onDelete = (todo)=>{

    console.log('ondelete',todo);

    // let index = todos.indexof(todo); //deleteing tis way doesn't work in react
    // todos.splice(inex,1);
    setTodos(todos.filter((e)=>{

        return e!==todo;

    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }



const addTodo = (title,desc)=>{

  console.log("adding this todo",title,desc);
  let sno;
  if (todos.length===0) { //when todos list is empty so it won't show any error
    sno=0;
  }else{

    sno = todos[todos.length-1].sno + 1;
  }
  const myTodo = {

    sno:sno,
    title:title,
    desc:desc,

  } 

  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
}

  const [todos, setTodos] = useState(
initTodo
    // {
    //   sno: 1,
    //   title: "go to the market",
    //   desc: "you need to go the market to get this job done"
    // },

    // {
    //   sno: 2,
    //   title: "go to the mall",
    //   desc: "you need to go the mallt to get this job done"
    // },

    // {
    //   sno: 3,
    //   title: "go to the bazar",
    //   desc: "you need to go the bazar to get this job done"
    // },
  ) 
   useEffect(() => {
    
    localStorage.setItem("todos",JSON.stringify(todos));

  }, [todos]);



  return (
    <>
    <Router>
    <Header title = "My to do list"/>
    <Switch>
          <Route exact path="/" render={()=>{
            return(
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete}/>
          </>
            )
          }}>
          </Route>
            
          <Route exact path="/about">
            <About />
          </Route>
         
    </Switch>

    <Footer/>
    </Router>
    </>
  );
}

export default App;
