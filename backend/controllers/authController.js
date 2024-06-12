const asyncHandler = require('express-async-handler'); // Middleware to handle exceptions in async functions
const User = require('../models/User'); // Import the User model to interact with the users collection in MongoDB
const jwt = require('jsonwebtoken'); // Import JSON Web Token for creating tokens

// Define the authUser function to authenticate a user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // Extract email and password from the request body

  // Find a user in the database with the provided email
  const user = await User.findOne({ email });

  // Check if the user exists and the provided password matches the stored password
  if (user && password === user.password) {
    // If authentication is successful, respond with the user's id, email, and a generated token
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id) // Generate a token for the authenticated user
    });
  } else {
    // If authentication fails, respond with a 401 status and an error message
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Define the generateToken function to create a JWT for a given user id
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d' // Set the token to expire in 30 days
  });
};

// Export the authUser function to be used in other parts of the application
module.exports = { authUser };
