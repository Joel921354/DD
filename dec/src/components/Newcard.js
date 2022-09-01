import {Card, Form, Button, Accordion} from 'react-bootstrap/';
import Query from './query';
import Paccord from './accordion';
import { useState, useEffect } from 'react';

function NewCard(props) {
// data to extract from the form

const addPhone = () => props.addPhone();
// set the values
const phoneNameHandler = (event) => {
  props.setPhoneName(event.target.value);
};
//set local query object to contain something
const queryStringHandler = () => {
  props.setQuery(query);
};
  // to adjust the form
//add the query for display and for submission
const [query, setQuery] = useState({
  combinator: '',
  rules: [],
 });
    
 return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="1">
      <Accordion.Header>Add a new platform definition ➕ </Accordion.Header>
      <Accordion.Body>
        
    <Form>
    <Card style={{ width: '44rem' }}>
      
        <Card.Body>
        
        <Card.Title> 
            New item ➕
        </Card.Title>
        
        <Card.Text>
          <Paccord title="Instructions" q="more to follow."/>
    
    <Form.Group className="mb-3" controlId="platform title">
        <Form.Label>Platform Name</Form.Label>
        <Form.Control type="text" onChange={phoneNameHandler}  placeholder="Enter Platform Name"/>
        <Form.Text className="text-muted">
          the ID of the platform is generated automatically
          <br/>
        </Form.Text>
        <Form.Label>Platform definition</Form.Label>
          <Query fields={props.fields} query={query} setQuery={setQuery} onChange={queryStringHandler} />
    
          <Button variant="outline-success" 
         
          onClick={() => addPhone()} > Add a new platform </Button>
  
        </Form.Group>
    
        </Card.Text>
        
        
        </Card.Body>
    </Card>
    
    </Form>
    </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default NewCard;