import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
    return (
        <div className="container">
             <h3 className="text-center my-3">Todos list</h3>
             {props.todos.length===0?"No todos to display!!":
            props.todos.map((todo)=>{ //we are trying to run a loop to display all elements of it

                return (
                    <>
                     <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>  
                    </>
                )//in map method we also need to generate unique key to each element
            })
            }
            
        </div>
    )
}
