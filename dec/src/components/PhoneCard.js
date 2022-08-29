import Card from 'react-bootstrap/Card';
import CrudBtn from './btnGrp';
import genericPhone from '../img/phone-generic.png';
import Paccord from './accordion';

function PhoneCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={genericPhone} />
        <Card.Body>
        
        <Card.Title> 
            <h6>Platform Name: <code> {props.title} </code></h6> 
        </Card.Title>
        
        <Card.Text>
          <Paccord q={props.q} title="🔍 Query "/>
        </Card.Text>
        
          <CrudBtn key={props.id} id={props.id} title={props.title} q={props.q} handler={props.handler}/>
        </Card.Body>
    </Card>
  );
}

export default PhoneCard;