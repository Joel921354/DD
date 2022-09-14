// Import path module
const path = require('path')

// Get the location of database.sqlite file
const PG_CONNECTION_STRING = "postgres://turtle:password@localhost:5432/turtle-test";

// Create connection to SQLite database
const knex = require('knex')({
  client: 'pg',
  connection: PG_CONNECTION_STRING,
  useNullAsDefault: true
});

knex.schema
  // Make sure no "phones or fields" table exists
  // before trying to create new
  .hasTable('phones')
    .then((exists) => {
      if (!exists) {
        //if no table exists create one
        return knex.schema.createTable('phones', (table)  => {
          table.increments('id').primary()
          table.text('phoneName')
          table.text('query')
        })
        .then(() => {
          // Log success message
          console.log('Table \'phones\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('phones')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

  /* knex.select('*').from('fieldTest')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err)) */

// Export the database
module.exports = knex