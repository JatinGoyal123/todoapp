import React from 'react';
import {TodoItem} from './TodoItem';
export const Todos=(props)=>{
    return (
        <div className="container my-3">
            <h3 className="text-primary  text-center">Todo Items</h3>
            {props.todos.length?
            (props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>   
            })):"noooooooooo"}
            
        </div>

    )
}