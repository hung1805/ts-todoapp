import React from 'react';
import { Form } from 'react-bootstrap';

const TodoFilter = () => {
  return (
    <div>
      <span>Filter</span>
      <Form.Select aria-label='Filter'>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='active'>Active</option>
        <option value='due-day'>Has Due Day</option>
      </Form.Select>
      {/* <DropdownButton title={'Filter'}>
        <Dropdown.Item eventKey={'all'}>All</Dropdown.Item>
        <Dropdown.Item eventKey={'completed'}>Completed</Dropdown.Item>
        <Dropdown.Item eventKey={'active'}>Active</Dropdown.Item>
        <Dropdown.Item eventKey={'due-day'}>Has Due Day</Dropdown.Item>
      </DropdownButton>
      <span>Sort</span>
      <DropdownButton className='' title={'Sort'}>
        <Dropdown.Item eventKey={'add-date'}>Add Date</Dropdown.Item>
        <Dropdown.Item eventKey={'due-date'}>Due Date</Dropdown.Item>
      </DropdownButton> */}
    </div>
  );
};

export default TodoFilter;
