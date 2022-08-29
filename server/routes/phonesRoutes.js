// Import express
const express = require('express')

// Import phones-controller
const phonesRoutes = require('../controllers/phonesController.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all phone
// In server.js, phones route is specified as '/phones'
// this means that '/all' translates to '/phones/all'
router.get('/all', phonesRoutes.phonesAll)

// Add route for POST request to create new phone
// In server.js, phones route is specified as '/phones'
// this means that '/create' translates to '/phones/create'
router.post('/create', phonesRoutes.phonesCreate)

// Add route for PUT request to delete specific phone
// In server.js, phones route is specified as '/phones'
// this means that '/delete' translates to '/phones/delete'
router.get('/delete/:id', phonesRoutes.phonesDelete)

// Add route for PUT request to reset phoneshelf list
// In server.js, phones route is specified as '/phones'
// this means that '/reset' translates to '/phones/reset'
router.put('/reset', phonesRoutes.phonesReset)

// Add route for PUT request to reset phoneshelf list
// In server.js, phones route is specified as '/phones'
// this means that '/fields' translates to '/phones/fields'
router.get('/fields', phonesRoutes.fieldTest)

// Export router
module.exports = router