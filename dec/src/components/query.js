import 'bootstrap/dist/css/bootstrap.min.css';
import {bootstrapControlClassnames, bootstrapControlElements,} from '@react-querybuilder/bootstrap';
import { formatQuery, QueryBuilder , } from 'react-querybuilder';
import { useState } from 'react';

/* TODO fix list so that it's dynmaic */

  function Query(props) {
//TODO error handling

const [localQ , setLocalQ] = useState("");

const queryExport = (q) => {
  console.log(q + 'this is q')
  props.setQuery(q)
 // console.log(props.setQuery(q) + 'this is setquery')

  setLocalQ( formatQuery(props.query, 'sql'))
  props.handler(q)
}
 //run once     
  
      //passing an array as a second empty argument stops it from running more than once        
   
//run once end

      return (
        <div>
          <div>
          <h4>Query</h4>
            <code>{localQ}</code>
          </div>
         

          <QueryBuilder
            fields={props.fields}
            query={props.query}
            onQueryChange={q => queryExport(q)}
            controlElements={bootstrapControlElements}
            controlClassnames={bootstrapControlClassnames}
            showCombinatorsBetweenRules={true}
       
          
          />
        </div>
      );
  }
export default Query  
 
