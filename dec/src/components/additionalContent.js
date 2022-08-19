import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/esm/Badge';

function AdditionalContent(props) {
    return (
      <Alert variant="success">
        <Alert.Heading>{props.title} <Badge bg="warning">{props.id}</Badge> </Alert.Heading>
        <p>
          {props.text}
        </p>
        <hr />
        <p className="mb-0">
          {props.subtext}
        </p>
      </Alert>
    );
  }
  
  export default AdditionalContent;