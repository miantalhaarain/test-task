const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to establish a connection to the database using the connection string
    // stored in the environment variable MONGO_URI. The options provided ensure 
    // compatibility with the latest MongoDB driver.
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,    // Use the new URL string parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    });
    
    // If the connection is successful, log the host name to the console
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error during connection, log the error message and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connectDB function to be used in other parts of the application
module.exports = connectDB;
