import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Query from './query';
import Paccord from './accordion';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function NewCard(props) {
// data to extract from the form
  const [phoneName, setPhoneName] = useState('')
  const [definition, setDefinition] = useState('')
  // to adjust the form

  const [formData, setFormData] = useState([])
  
  const fields = [{ name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age' },
  { name: 'address', label: 'Address' },
  { name: 'phone', label: 'Phone' },
  { name: 'email', label: 'Email' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'isDev', label: 'Is a Developer?', value: false }]
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
        <Form.Control type="text" placeholder="Enter Platform Name"  
          onChange={(event) => {
            setPhoneName(event.target.value);
          }}/>
        <Form.Text className="text-muted">
          the ID of the platform is generated automatically
          <br/>
        </Form.Text>
        <Form.Label>Platform definition</Form.Label>
        <Query fields={fields} />
    </Form.Group>
    
          
    
        </Card.Text>
        
          <Button variant="outline-success" onClick={setFormData} > Add a new platform </Button>
        </Card.Body>
    
    </Card>
    </Form>
    </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default NewCard;