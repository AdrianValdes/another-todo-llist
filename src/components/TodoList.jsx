import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, dispatch }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
