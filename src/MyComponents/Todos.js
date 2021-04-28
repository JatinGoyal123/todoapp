import React, { useEffect } from 'react';
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
  // useEffect(() => {
  //    console.log(props.todos);

  // }, [props.todos])
  let myStyle = {
    minHeight: '70vh',
    margin: '40px  auto ',
  };
  return (
    <div className="container" style={myStyle}>
      <h3>Todos Items</h3>
      {props.todos.length
        ? props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })
        : 'Todo List is Empty!!!!!'}
    </div>
  );
};
