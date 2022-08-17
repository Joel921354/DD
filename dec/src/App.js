import "./App.css";
import { useState } from "react";
import Axios from "axios";
import phoneGeneric from "./img/phone-generic.png";

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

getPhones();
  return (
    
    <div className="App" >
             

       {phoneList.map((val, key) => {
          return (
            <div className="phonesBox">
              <div>
                <img className="phoneImg" src={phoneGeneric}></img>
                <h3 key={val.key}>phone: {val.phoneName}</h3>
                <h3>query: {val.query}</h3>
          
              </div>
              <div>
            {/*     <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
 
                <button
                  onClick={() => {
                    deletePhones(val.id);
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          );})} </div>
  ); 
}

export default App;
