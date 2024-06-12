const express = require('express'); // Import Express to create the application
const dotenv = require('dotenv'); // Import dotenv to load environment variables from a .env file
const connectDB = require('./config/db'); // Import the database connection function
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const productRoutes = require('./routes/productRoutes'); // Import product routes
const bodyParser = require('body-parser'); // Import body-parser to parse incoming request bodies
const cors = require('cors'); // Import cors to enable Cross-Origin Resource Sharing

// Load environment variables from the .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Create an Express application
const app = express();

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define routes for authentication and product-related requests
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Define the port the server will run on, defaulting to 5000 if not specified in environment variables
const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined port, logging a message to the console when running
app.listen(PORT, console.log(`Server running on port ${PORT}`));
