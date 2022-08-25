import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    bootstrapControlClassnames,
    bootstrapControlElements,
  } from '@react-querybuilder/bootstrap';
  import { formatQuery, QueryBuilder , parseSQL} from 'react-querybuilder';

/* TODO fix list so that it's dynmaic */

/* const fields = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'age', label: 'Age' },
    { name: 'address', label: 'Address' },
    { name: 'phone', label: 'Phone' },
    { name: 'email', label: 'Email' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'isDev', label: 'Is a Developer?', value: false }
  ]; */

  function Query(props) {

    const test = parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);
    const [query, setQuery] = useState({
        combinator: 'and',
        rules: [],
      });

  
      return (
        <div>
         
          
          <div>
          <h4>Query</h4>
            <code>{formatQuery(query, 'sql')}</code>
          </div>
         

          <QueryBuilder
            fields={props.fields}
            query={query}
            onQueryChange={q => setQuery(q)}
            controlElements={bootstrapControlElements}
            controlClassnames={bootstrapControlClassnames}
            showCombinatorsBetweenRules={true}
          />
        </div>
      );
  }
export default Query  
 
