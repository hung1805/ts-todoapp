import React, { useEffect } from 'react';
import { useState } from 'react';
import { todoList } from '../../todoList';
import { AddTodo, ITodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../../type';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList: React.FC = () => {
  const [list, setList] = useState(todoList);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
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

      {list.length > 0 ? (
        <ListGroup className='my-4'>
          {list.map((item) => (
            <ListGroup.Item key={item.id}>
              <TodoItem
                todo={item}
                updateTodo={update}
                removeTodo={remove}
                toggleTodo={toggle}
                setList={setList}
                list={list}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className='pt-4 text-center'>You have no todo.</p>
      )}
    </div>
  );
};

export default TodoList;
