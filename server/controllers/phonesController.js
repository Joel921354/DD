// Import database
const knex = require('./../db')

// Retrieve all phones
exports.phonesAll = async (req, res) => {
  // Get all phones from database
  knex
    .select('*') // select all records
    .from('phones') // from 'phones' table
    .then(userData => {
      // Send phones extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving phones: ${err}` })
    })
}

// retreive column info
exports.fieldTest = async (req, res) => {
  // Get all phones from database
  knex('fieldTest').select('*') // select all records
  .from('fieldTest').then(info => {
      // Send phones extracted from database in response
      res.json(info)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving columns: ${err}` })
    })
}

// Create new phone
exports.phonesCreate = async (req, res) => {
  // Add new phone to database
  knex('Phones')
    .insert({ // insert new record, a phone
      'phone': req.body.phone,
      'query': req.body.query
      
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Phone \'${req.body.phone}\' created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.phone} phone: ${err}` })
    })
}

// Remove specific phone
exports.phonesDelete = async (req, res) => {
  // Find specific phone in the database and remove it
  knex('phones')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `phone ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} phone: ${err}` })
    })
}

// Remove all phones on the list
exports.phonesReset = async (req, res) => {
  // Remove all phones from database
  knex
    .select('*') // select all records
    .from('phones') // from 'phones' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Phone list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting phone list: ${err}.` })
    })
}