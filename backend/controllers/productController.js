const Product = require("../models/Product"); // Import the Product model to interact with the products collection in MongoDB

// Define the addProduct function to add a new product to the database
const addProduct = async (req, res) => {
  try {
    // Destructure product details from the request body
    const { name, description, price, quantity, category, size, pictures } = req.body;
    // Get the user id from the request (assuming user is authenticated and user id is added to the req object)
    const user = req.user.id;

    // Create a new product instance with the provided details and user id
    const product = new Product({
      user,
      name,
      description,
      price,
      quantity,
      category,
      size,
      pictures,
    });

    // Save the new product to the database
    const savedProduct = await product.save();
    // Respond with a 201 status and the saved product if successful
    res.status(201).json(savedProduct);
  } catch (error) {
    // If there's an error, respond with a 500 status and an error message
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};

// Export the addProduct function to be used in other parts of the application
module.exports = {
  addProduct,
};
