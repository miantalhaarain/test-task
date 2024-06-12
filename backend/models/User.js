const mongoose = require('mongoose'); // Import Mongoose for interacting with MongoDB

// Define the schema for the User model
const userSchema = mongoose.Schema({
  email: {
    type: String, // User email
    required: true, // Email is required
    unique: true // Email must be unique
  },
  password: {
    type: String, // User password
    required: true // Password is required
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
