import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import Badge from 'react-bootstrap/Badge';
import Phonecard from './components/PhoneCard';
import NewCard from './components/Newcard';
import Topbar from './common/navbar';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';




function App() {

  //form contents
  const [phoneName, setPhoneName] = useState("");
  const [query, setQuery] = useState("");
  
  //const [id, setId] = useState(0);
  //get list of phones in an array
  const [phoneList, setPhoneList] = useState([]);
  // delete the phone

  //fields TODO
  const fields = [{ name: 'APN', label: 'APN' },
  { name: 'MCC', label: 'MCC' },
  { name: 'age', label: 'Age' },
  { name: 'deviceType', label: 'Device Type' }]
  
  // enter and create a new phone
  const addPhone = () => {
    console.log(query + 'the query...' + phoneName + 'the phonename' )
    
    Axios.post("http://localhost:4001/phones/create", {
      phoneName: phoneName,
      query: query
    }).then(res => {
      console.log(res)
      getPhones()
    }).catch(error => console.error(`There was an error creating${error}`))
  };
//end

//delete a phone with the set id
 const deletePhone = (id) => {
  Axios.get(`http://localhost:4001/phones/delete/${id}`).then((response) => {
    setPhoneList(
      phoneList.filter((val) => {
        return val.id !== id;
      })
    );
  });
};

//retreive a list of phones that exist
  const getPhones = () => {
  Axios.get("http://localhost:4001/phones/all").then((response) => { 
    setPhoneList(response.data);
  });
  };
//get column fields and add it to the local field list for querybuilder

// application functionality

// end application functionality
useEffect(() => {
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
  
    <NewCard addPhone={addPhone} setQuery={setQuery} setPhoneName={setPhoneName} fields={fields} query={query} > </NewCard>
    
    </div>
       {phoneList.map((val, key) => {
          return (
            <div className="phonesBox" key={val.id}>
              <Badge bg="warning">Platform id = <b>{val.id}</b></Badge> 
               <Phonecard title={val.phoneName} q={val.query} key={val.id} id={val.id} handler={deletePhone}>
              
               </Phonecard>
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
