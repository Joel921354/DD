import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Query from './query';
import Paccord from './accordion';
import Form from 'react-bootstrap/Form';
import setPhoneName from '../App';

function NewCard(props) {
    
  return (
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
        <Form.Control type="text" placeholder="Enter Platform Name"  onChange={(event) => {
            setPhoneName(event.target.value);
          }}/>
        <Form.Text className="text-muted">
          the ID of the platform is generated automatically
          <br/>
        </Form.Text>
        <Form.Label>Platform definition</Form.Label>
        <Query />
    </Form.Group>
    
          
    
        </Card.Text>
        
          <Button variant="outline-success" > Add a new platform </Button>
        </Card.Body>
    
    </Card>
    </Form>
  );
}

export default NewCard;