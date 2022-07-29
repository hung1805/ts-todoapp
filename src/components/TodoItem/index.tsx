import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ITodo, RemoveTodo, ToggleTodo, UpdateTodo } from '../../type';
import { formatTime } from '../../utilities';
interface TodoItemProps {
  todo: ITodo;
  updateTodo: UpdateTodo;
  removeTodo: RemoveTodo;
  toggleTodo: ToggleTodo;
  list: ITodo[];
  setList: Dispatch<SetStateAction<ITodo[]>>;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, removeTodo, toggleTodo, list, setList }) => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState('');

  const handleShowTodoForm = () => {
    setText(todo.title);
    setShowInput(true);
  };
  const handleCloseInput = () => {
    setShowInput(false);
    setText('');
  };
  const handleChangeTodoTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== todo.title) {
      const temp = [...list];
      temp.map((item) => {
        if (item.id === todo.id) {
          item.title = text;
        }
      });
      setList(temp);
      setShowInput(false);
      setText('');
    }
  };
  const handleDeleteTodo = () => {
    setList((list) => list.filter((item) => item.id !== todo.id));
  };

  const handleCheckCompletedTodo = () => {
    setList((list) =>
      list.map((item) => {
        if (item.id === todo.id) item.isCompleted = true;
        return item;
      })
    );
    // const temp = [...list];
    // temp.map((item) => {
    //   if (item.id === todo.id) {
    //     // item.isCompleted=
    //   }
    // });
  };

  return (
    <div className='p-2 d-flex justify-content-between'>
      <div className='d-flex align-items-end gap-3'>
        {showInput && (
          <form className='d-flex gap-2 align-items-center' onSubmit={(e) => handleChangeTodoTitle(e)}>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='p-2' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='red'
              onClick={() => handleCloseInput()}
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
            {text !== todo.title && (
              <Button type='submit' variant='primary'>
                Update
              </Button>
            )}
          </form>
        )}
        {!showInput && <span>{todo.title}</span>}
      </div>
      <div className='d-flex flex-column align-items-end gap-2'>
        <div>
          {todo.isCompleted ? (
            <span>Completed</span>
          ) : (
            <span onClick={handleCheckCompletedTodo}>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon' fill='none' viewBox='0 0 24 24' stroke='blue'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            </span>
          )}
          {!todo.isCompleted && (
            <span onClick={handleShowTodoForm}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='red' className='icon'>
                <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
              </svg>
            </span>
          )}
          <span onClick={handleDeleteTodo}>
            <svg xmlns='http://www.w3.org/2000/svg' className='icon' fill='none' viewBox='0 0 24 24' stroke='blue'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </span>
        </div>
        <div className='d-flex gap-1 align-items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon' viewBox='0 0 20 20' fill='grey'>
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          <p>Create At: {formatTime(todo.dayCreated)}</p>
        </div>
        <div className='d-flex gap-1 align-items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon' viewBox='0 0 20 20' fill='grey'>
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          <p>Due Day:{formatTime(todo.dueDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
