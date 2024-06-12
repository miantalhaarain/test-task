const express = require('express'); // Import Express to create the router
const router = express.Router(); // Create a new router instance
const { addProduct } = require('../controllers/productController'); // Import the addProduct controller function
const protect = require('../middleware/authMiddleware'); // Import the protect middleware to secure routes

// Define a POST route for adding a product, protected by the protect middleware
router.post('/', protect, addProduct);

// Export the router to be used in other parts of the application
module.exports = router;
