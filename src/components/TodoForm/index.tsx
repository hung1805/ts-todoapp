import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AddTodo } from '../../type';
interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('abc');
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) return;
    else {
      addTodo({ id: Date.now(), title: task, isCompleted: false, timeLine: Date.now() });
      setTask('');
    }
  };
  return (
    <div className='pb-2'>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            placeholder='Your New Task Here...'
            aria-label='task'
            aria-describedby='task'
            value={task}
            onChange={handleChange}
          />
          <Button type='submit' variant='primary'>
            Add New Task
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default TodoForm;
