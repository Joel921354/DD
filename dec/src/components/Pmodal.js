import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/esm/Badge';
import Modal from 'react-bootstrap/Modal';
import QueryBuilder from 'react-querybuilder';
import {
  bootstrapControlClassnames,
  bootstrapControlElements,
} from '@react-querybuilder/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Pmodal({show, setShow, handleClose, id, title}) {
  
  const fields = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'age', label: 'Age' },
    { name: 'address', label: 'Address' },
    { name: 'phone', label: 'Phone' },
    { name: 'email', label: 'Email' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'isDev', label: 'Is a Developer?', value: false }
  ];
  return (
<>
    

          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Editing platform ID - <Badge bg="warning"><b>{id}</b></Badge> 
            &nbsp; Platform Name - <Badge bg="info"><code>{title}</code></Badge>  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Edit Query <Badge bg="warning"><b>{id}</b></Badge> 
           {/* */}
          <QueryBuilder fields={fields}  controlElements={bootstrapControlElements}
            controlClassnames={bootstrapControlClassnames}
            />
          {/* */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose(false)}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default(Pmodal);