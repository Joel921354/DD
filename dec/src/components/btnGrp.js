import {Button, ButtonGroup} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pmodal from './Pmodal';
import { useState } from 'react';


//child of phonecard 
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

    const deletePhone = (id) => props.handler(id);
    
    //console.log(props.id);

    //TODO show={show} property for the pmodal
  return (
    <ButtonGroup aria-label="Basic example">

      <Button variant="inactive" size="sm" onClick={handleShow}>Edit Query </Button>
        <Pmodal  show={show}fields={fields}  setShow={() => setShow(Boolean)} handleClose={() => handleClose(Boolean)} id={props.id} title={props.title} />
      {/* //open model with id */} 
      <Button variant="outline-danger" size="sm" onClick={() => deletePhone(props.id)}>Delete item</Button>
      <Button variant="inactive" size="sm">statistics</Button>

  
    </ButtonGroup>
    

  );
}

export default CrudBtn;