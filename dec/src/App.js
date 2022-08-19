import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import Badge from 'react-bootstrap/Badge';
import Pcard from "./components/PhoneCard";
import Topbar from './common/navbar';
import Stack from 'react-bootstrap/Stack';
import NewCard from './components/newcard';
import Container from 'react-bootstrap/esm/Container';
import DataTable from './components/dataTable';
import AdditionalContent from './components/additionalContent';
import { Button } from 'bootstrap';



function App() {

  //form contents
  const [phoneName, setPhoneName] = useState("");
  const [query, setQuery] = useState("");
  const [id, setId] = useState(0);
  //get list of phones in an array
  const [phoneList, setPhoneList] = useState([]);

  // enter and create a new phone
  const addPhone = () => {
    Axios.post("http://localhost:4001/phones/create", {
      
      
    }).then(() => {
      setPhoneList([
        ...phoneList,
        {
          id: id,
          phoneName: phoneName,
          query: query,
        },
      ]);
    });
  };
//end

//retreive a list of phones that exist
  const getPhones = () => {
  Axios.get("http://localhost:4001/phones/all").then((response) => { 
    setPhoneList(response.data);
  });
  };

// application functionality

// end application functionality
useEffect(() => {
  // Run! Like go get some data from an API. 
  //passing an array as a second empty argument stops it from running more than once
  try {
    getPhones();
  } catch (error) {
    console.log(error + "getphones failed" );
  }
}, []);
//begin rendering   
return (
   
    <div className="App" >
{/* begin mapping */}
<Topbar/>
  <Stack direction="horizontal" className="d-flex align-items-center justify-content-center  not-found-container" gap={4}>
  <div>
  <Badge bg="info">Add new item ➕</Badge> 
    <NewCard > </NewCard>
    
    </div>
       {phoneList.map((val, key) => {
          return (
            <div className="phonesBox" key={val.id}>
              <Badge bg="warning">Platform id = <b>{val.id}</b></Badge> 
               <Pcard title={val.phoneName} q={val.query} key={val.id} id={val.id} />
               
            </div>
          );})} 
  </Stack>
  {/* begin mapping */}
            <hr/>
    <Container>
      
     
    </Container>
    </div>
  ); 
}// end rendering

export default App;
