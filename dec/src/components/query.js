import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {bootstrapControlClassnames, bootstrapControlElements,} from '@react-querybuilder/bootstrap';
import { formatQuery, QueryBuilder , parseSQL} from 'react-querybuilder';

/* TODO fix list so that it's dynmaic */

  function Query(props) {
//TODO error handling
    const inputQuery = parseSQL(`SELECT * FROM t WHERE APN = 'name here'`);
    
 //run once     
    useEffect(() => {
      //passing an array as a second empty argument stops it from running more than once
        
        props.setQuery({...props.query, 
          combinator: inputQuery.combinator, 
          rules: inputQuery.rules, 
        },)
      }, []);
//run once end

      return (
        <div>
          <div>
          <h4>Query</h4>
            <code>{formatQuery(props.query, 'sql')}</code>
          </div>
         

          <QueryBuilder
            fields={props.fields}
            query={props.query}
            onQueryChange={q => props.setQuery(q)}
            controlElements={bootstrapControlElements}
            controlClassnames={bootstrapControlClassnames}
            showCombinatorsBetweenRules={true}
          />
        </div>
      );
  }
export default Query  
 
