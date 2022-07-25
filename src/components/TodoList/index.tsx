import React from 'react';
import { useState } from 'react';
import { todoList } from '../../todoList';
import { AddTodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../../type';
import TodoFilter from '../TodoFilter';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const TodoList: React.FC = () => {
  const [list, setList] = useState(todoList);
  const add: AddTodo = (newTodo) => {
    setList([...list, newTodo]);
  };
  const remove: RemoveTodo = (id) => {
    setList([...list].filter((item) => item.id !== id));
  };
  const toggle: ToggleTodo = (id) => {
    setList(
      [...list].map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };
  const update: UpdateTodo = (id, value) => {
    setList(
      [...list].map((item) => {
        if (item.id === id) {
          return { ...item, title: value };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <TodoForm addTodo={add} />
      <TodoFilter />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <TodoItem todo={item} updateTodo={update} removeTodo={remove} toggleTodo={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
