import React, { useEffect, useState } from 'react';
import {Button, Badge, Modal} from 'react-bootstrap/';
import {bootstrapControlClassnames,bootstrapControlElements,} from '@react-querybuilder/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryBuilder, parseSQL } from 'react-querybuilder';
import ErrorBoundary from '../common/error';



function Pmodal({show, setShow, handleClose, id, title, fields, query, xq}) {

  const [xquery, setxQuery] = useState({
    combinator: '',
    rules: [],
  });
  const inputQuery = parseSQL(xq);
  
  useEffect(() => {
    //debug
   
      // Run! Like go get some data from an API. 
      //passing an array as a second empty argument stops it from running more than once
      try {
        setxQuery({...query, 
          combinator: inputQuery.combinator, 
          rules: inputQuery.rules, 
        },)
      } catch (error) {
        console.log(error)
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
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
           <ErrorBoundary>
          <QueryBuilder 
          fields={fields} 
          query={xquery} 
          controlElements={bootstrapControlElements}
          controlClassnames={bootstrapControlClassnames}
            />
            </ErrorBoundary>
            
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