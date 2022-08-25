import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pmodal from './Pmodal';
import { useState } from 'react';




function CrudBtn(props) {
// parent model to the buttons
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // handle the fields TODO
   const fields = [{ name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'age', label: 'Age' },
    { name: 'address', label: 'Address' },
    { name: 'phone', label: 'Phone' },
    { name: 'email', label: 'Email' },
    { name: 'twitter', label: 'Twitter' },
    ] 

  return (
    <ButtonGroup aria-label="Basic example">

      <Button variant="outline-primary" size="sm" onClick={handleShow}>Edit Query </Button>
        <Pmodal show={show} fields={fields} xq={props.q} setShow={() => setShow(Boolean)} handleClose={() => handleClose(Boolean)} id={props.id} title={props.title} />
      {/* //open model with id */} 
      <Button variant="outline-danger" size="sm" >Delete item</Button>
      <Button variant="outline-info" size="sm">statistics</Button>

    </ButtonGroup>
    

  );
}

export default CrudBtn;