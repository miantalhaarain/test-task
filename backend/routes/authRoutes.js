const express = require('express'); // Import Express to create the router
const router = express.Router(); // Create a new router instance
const { authUser } = require('../controllers/authController'); // Import the authUser controller function

// Define a POST route for /login that uses the authUser controller to authenticate the user
router.post('/login', authUser);

// Export the router to be used in other parts of the application
module.exports = router;
