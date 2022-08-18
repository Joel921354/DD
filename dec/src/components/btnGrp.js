import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function CrudBtn() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary">Edit Query</Button>
      <Button variant="danger">Delete item</Button>
      <Button variant="info">statistics</Button>
    </ButtonGroup>
  );
}

export default CrudBtn;