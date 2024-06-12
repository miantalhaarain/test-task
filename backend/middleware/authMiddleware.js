const jwt = require('jsonwebtoken'); // Import JSON Web Token for verifying tokens
const User = require('../models/User'); // Import the User model to interact with the users collection in MongoDB

// Define the protect middleware function to protect routes that require authentication
const protect = async (req, res, next) => {
  let token;

  // Check if the authorization header is present and starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from the authorization header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user associated with the decoded token and exclude the password field
      req.user = await User.findById(decoded.id).select('-password');

      // Call the next middleware or route handler
      next();
    } catch (error) {
      // If there's an error during token verification, log the error and respond with a 401 status
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is found, respond with a 401 status and an error message
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Export the protect function to be used as middleware in other parts of the application
module.exports = protect;
