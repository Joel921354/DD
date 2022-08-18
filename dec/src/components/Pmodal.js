import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pmodal({show, setShow, handleClose, id, title}) {
  
  const cancelButtonRef = useRef(null);
  
  
  return (
<>
    

          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>editing platform ID - {id} - {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key. {id}
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