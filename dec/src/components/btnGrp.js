import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pmodal from './Pmodal';
import { useState } from 'react';




function CrudBtn(props) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <ButtonGroup aria-label="Basic example">

      <Button variant="outline-primary" size="sm" onClick={handleShow}>Edit Query </Button>
        <Pmodal show={show} setShow={() => setShow(Boolean)} handleClose={() => handleClose(Boolean)} id={props.id} title={props.title} />
      {/* //open model with id */} 
      <Button variant="outline-danger" size="sm" >Delete item</Button>
      <Button variant="outline-info" size="sm">statistics</Button>

    </ButtonGroup>
    

  );
}

export default CrudBtn;