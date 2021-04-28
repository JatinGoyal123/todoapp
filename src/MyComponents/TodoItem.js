import React from 'react';
import './container.css';
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="card" style={{ width: '50%' }}>
        <b>
          <div className="card-header">{todo.title}</div>
        </b>
        <div className="card-body">
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
