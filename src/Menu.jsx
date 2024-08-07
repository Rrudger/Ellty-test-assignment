import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Row,
} from 'react-bootstrap';

const Menu = () => {
  const pages = [1,2,3,4,5,6];

  const handleCheckAll = () => {
    const newVal = document.getElementById('all_pages').checked === true ? true : false;
    const checkBoxes = document.getElementsByClassName('form-check-input');
    for (let item of checkBoxes) {
      item.checked = newVal;
    }
  };

  return (
    <Container className='my-4 pb-3 shadow rounded menu'>
      <Form.Check
        reverse
        onChange={handleCheckAll}
        className="menu-row mx-2 pt-3 d-flex align-items-center justify-content-between flex-row-reverse"
        label="All pages"
        name="all pages"
        type='checkbox'
        id='all_pages'
      />
      <hr />
      {pages.map((row) =>
        <Form.Check
          reverse
          key={row}
          className={row > 4 ? 'd-none' :
          'menu-row mx-2 d-flex align-items-center justify-content-between flex-row-reverse'}
          label={`Page ${row}`}
          name={`Page ${row}`}
          type='checkbox'
          id={`page_${row}`}
        />
      )}
      <hr />
      <Row className='px-2 mb-2 d-flex justify-content-center'>
        <Button variant='warning' className='custom-button'>
          Done
        </Button>
      </Row>
    </Container>
  )
};

export default Menu;
