import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";
import Pcard from "./components/PhoneCard";
import Topbar from './common/navbar';
import Stack from 'react-bootstrap/Stack';


function App() {

  //form contents
  const [phoneName, setPhoneName] = useState("");
  const [query, setQuery] = useState("");
  
  //get list of phones in an array
  const [phoneList, setPhoneList] = useState([]);

  // enter and create a new phone
  const addPhone = () => {
    Axios.post("http://localhost:4001/phones/create", {
      
      
    }).then(() => {
      setPhoneList([
        ...phoneList,
        {
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

try {
    getPhones();
} catch (error) {
    console.log(error);
}

  return (
   
    <div className="App" >
{/* begin mapping */}
<Topbar/>
  <Stack direction="horizontal" gap={4}>
       {phoneList.map((val, key) => {
          return (
            <div className="phonesBox">
               <Pcard title={val.phoneName} q={val.query}/> 
            </div>
          );})} 
  </Stack>
    
    
    </div>
  ); 
}

export default App;
