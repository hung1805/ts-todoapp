import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';
import Form from 'react-bootstrap/Form';
import { AddTodo } from '../../type';
import 'react-day-picker/dist/style.css';
import { formatTime, validateDay } from '../../utilities';

interface TodoFormProps {
  addTodo: AddTodo;
  setError: Dispatch<SetStateAction<string>>;
  setShowError: Dispatch<SetStateAction<boolean>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo, setError, setShowError }) => {
  const [showDayPicker, setShowDayPicker] = useState<boolean>(false);
  const [task, setTask] = useState<string>('');
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) {
      setError('Please Enter Your Task');
      setShowError(true);
    } else {
      if (selected) {
        const time = new Date(selected).getTime();
        console.log(time < Date.now());
        if (time < Date.now()) {
          setError('Time is over. Please pick another day.');
          setShowError(true);
        } else {
          addTodo({
            id: Date.now(),
            title: task,
            isCompleted: false,
            dayCreated: Date.now(),
            dueDate: selected.getTime(),
          });
          setTask('');
          setShowDayPicker(false);
          setSelected(undefined);
        }
      } else {
        setError('Pick a Due Day');
        setShowError(true);
      }
    }
  };
  useEffect(() => {
    setShowError(false);
    setShowDayPicker(false);
  }, [selected]);
  return (
    <div className='pb-2'>
      <form onSubmit={handleSubmit} className='position-relative'>
        <InputGroup>
          <Form.Control
            placeholder='Your New Task Here...'
            aria-label='task'
            aria-describedby='task'
            value={task}
            onChange={handleChange}
          />
          <Button variant='primary' onClick={() => setShowDayPicker(true)}>
            {!selected ? (
              <svg xmlns='http://www.w3.org/2000/svg' className='icon' viewBox='0 0 20 20' fill='white'>
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <span style={{ color: 'black' }}>Date: {formatTime(selected.getTime())}</span>
            )}
          </Button>
          <Button type='submit' variant='primary'>
            Add New Task
          </Button>
        </InputGroup>
        {showDayPicker && <DayPicker className='day-picker' mode='single' selected={selected} onSelect={setSelected} />}
      </form>
    </div>
  );
};

export default TodoForm;
