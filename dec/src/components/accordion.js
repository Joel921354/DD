import Accordion from 'react-bootstrap/Accordion';

function Paccord(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Query</Accordion.Header>
        <Accordion.Body>
         <code>{props.q}</code> 
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default Paccord;