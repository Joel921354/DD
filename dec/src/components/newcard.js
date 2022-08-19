import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Query from './query';
import Paccord from './accordion';
import Form from 'react-bootstrap/Form';

function NewCard(props) {
    
  return (
    <Card style={{ width: '44rem' }}>
      
        <Card.Body>
        
        <Card.Title> 
            New item ➕
        </Card.Title>
        
        <Card.Text>
          <Paccord title="Instructions" q="more to follow."/>
    <Form>
    <Form.Group className="mb-3" controlId="platform title">
        <Form.Label>Platform Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Platform Name" />
        <Form.Text className="text-muted">
          the ID of the platform is generated automatically
          <br/>
        </Form.Text>
        <Form.Label>Platform definition</Form.Label>
        <Query />
    </Form.Group>
    
          
    </Form>
        </Card.Text>
        
          <Button variant="outline-success" > Add a new platform </Button>
        </Card.Body>
    </Card>
  );
}

export default NewCard;