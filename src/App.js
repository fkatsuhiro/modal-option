import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlBasicModal({ basicModal, handleChangeBasicModal }) {
  return (
    <div>
      <BasicModal show={basicModal} handleClose={handleChangeBasicModal} />
      <button className='btn btn-primary mt-3' onClick={handleChangeBasicModal}>
        Click!
      </button>
    </div>
  );
}

function ControlToggleModal({ toggleModal, handleChangeToggleModal, selectRadio, handleSelectRadio, selectCheckboxes, handleSelectCheckbox }) {
  return (
    <div>
      <ToggleModal
        show={toggleModal}
        handleClose={handleChangeToggleModal}
        selectRadio={selectRadio}
        handleSelectRadio={handleSelectRadio}
        selectCheckboxes={selectCheckboxes}
        handleSelectCheckbox={handleSelectCheckbox}
      />
      <button className='btn btn-primary mt-3' onClick={handleChangeToggleModal}>
        Click!
      </button>
    </div>
  );
}

function ControlFormModal({ formModal, handleChangeFormModal, email, handleInputEmail, text, handleInputText }) {
  return (
    <div>
      <FormModal 
        show={formModal} 
        handleClose={handleChangeFormModal} 
        email={email}
        handleInputEmail={handleInputEmail}
        text={text}
        handleInputText={handleInputText}
      />
      <button className='btn btn-primary mt-3' onClick={handleChangeFormModal}>
        Click!
      </button>
    </div>
  );
}

function BasicModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Basic Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This is Modal sample
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function ToggleModal({ show, handleClose, selectRadio, handleSelectRadio, selectCheckboxes, handleSelectCheckbox }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Toggle Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='mt-3'>You can check the option</p>
        <Form>
          {/* ラジオボタン */}
          <Form.Check
            type='radio'
            name='radioGroup'
            label='Option 1'
            value='Option 1'
            checked={selectRadio === 'Option 1'}
            onChange={handleSelectRadio}
            className='mt-3'
          />
          <Form.Check
            type='radio'
            name='radioGroup'
            label='Option 2'
            value='Option 2'
            checked={selectRadio === 'Option 2'}
            onChange={handleSelectRadio}
            className='mt-3'
          />

          {/* チェックボックス */}
          <p className='mt-3'>Select multiple options:</p>
          <Form.Check
            type='checkbox'
            label='Checkbox 1'
            value='Checkbox 1'
            checked={selectCheckboxes.includes('Checkbox 1')}
            onChange={handleSelectCheckbox}
            className='mt-3'
          />
          <Form.Check
            type='checkbox'
            label='Checkbox 2'
            value='Checkbox 2'
            checked={selectCheckboxes.includes('Checkbox 2')}
            onChange={handleSelectCheckbox}
            className='mt-3'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

function FormModal({ show, handleClose,email, handleInputEmail, text, handleInputText }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Form Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email" 
              placeholder="name@example.com"
              onChange={handleInputEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea" 
              rows={3}
              onChange={handleInputText}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-secondary' onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App() {
  const [basicModal, setBasicModal] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [selectRadio, setSelectRadio] = useState('');
  const [selectCheckboxes, setSelectCheckboxes] = useState([]);
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  function handleChangeBasicModal() {
    setBasicModal((prev) => !prev);
  }

  function handleChangeToggleModal() {
    setToggleModal((prev) => !prev);
  }

  function handleChangeFormModal() {
    setFormModal((prev) => !prev);
  }

  const handleSelectRadio = (e) => {
    setSelectRadio(e.target.value);
  };

  const handleSelectCheckbox = (e) => {
    const value = e.target.value;
    setSelectCheckboxes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleInputEmail = (e) => {
    setEmail((prev) => e.target.value);
  }

  const handleInputText = (e) => {
    setText((prev) => e.target.value);
  }

  return (
    <div className='d-flex' style={{ paddingTop: '100px', margin: '0 auto', width: '80%' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Basic Modal</Card.Title>
          <Card.Text>
            This Modal is the most basic style. There are Message and close button.
          </Card.Text>
          <ControlBasicModal basicModal={basicModal} handleChangeBasicModal={handleChangeBasicModal} />
        </Card.Body>
      </Card>
      &nbsp;&nbsp;
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Checks and Radios</Card.Title>
          <Card.Text>
            You can check the checkboxes and radios.
            <p>
              Selected option : {selectRadio} <br />
              Checked option : {selectCheckboxes + ' '}
            </p>
          </Card.Text>
          <ControlToggleModal
            toggleModal={toggleModal}
            handleChangeToggleModal={handleChangeToggleModal}
            selectRadio={selectRadio}
            handleSelectRadio={handleSelectRadio}
            selectCheckboxes={selectCheckboxes}
            handleSelectCheckbox={handleSelectCheckbox}
          />
        </Card.Body>
      </Card>
      &nbsp;&nbsp;
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Forms and Dropdowns</Card.Title>
          <Card.Text>
            You can input email and text.
            <p>
              Email : {email} <br />
              Content : {text}
            </p>
          </Card.Text>
          <ControlFormModal 
            formModal={formModal} 
            handleChangeFormModal={handleChangeFormModal}
            email={email}
            handleInputEmail={handleInputEmail}
            text={text}
            handleInputText={handleInputText}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
