const mongoose = require('mongoose'); // Import Mongoose for interacting with MongoDB

// Define a function to limit the number of pictures to 6
const arrayLimit = (val) => {
  return val.length <= 6;
};

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    required: true, // User is required
    ref: 'User' // Refers to the User model
  },
  name: {
    type: String, // Product name
    required: true, // Name is required
    minlength: 3, // Minimum length of 3 characters
  },
  description: {
    type: String, // Product description
  },
  price: {
    type: Number, // Product price
    required: true, // Price is required
  },
  quantity: {
    type: Number, // Product quantity
    required: true, // Quantity is required
  },
  category: {
    type: String, // Product category
    required: true, // Category is required
  },
  size: {
    type: String, // Product size
  },
  pictures: {
    type: [String], // Array of picture URLs
    required: true, // Pictures are required
    validate: [arrayLimit, 'Pictures exceeds the limit of 6'] // Validate that pictures array does not exceed 6
  },
  createdAt: {
    type: Date, // Creation date of the product
    default: Date.now, // Default to current date and time
  },
});

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model to be used in other parts of the application
module.exports = Product;
