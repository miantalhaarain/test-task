// This file is not a part of Project it just only extra work to test API on run Time 
// -------------------------------------------------------------------------------------

// const request = require('supertest');
// const app = require('./server'); // Ensure your server file exports the app
// const User = require('../backend/models/User');
// const Product = require('../backend/models/Product');
// const mongoose = require('mongoose');

// let token;

// beforeAll(async () => {
//   // Connect to a test database
//   const url = `mongodb://127.0.0.1/mern_test`;
//   await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//   // Create a test user and get the token
//   const user = await User.create({
//     email: 'user@soft-enterprise.com',
//     password: await bcrypt.hash('123123abc', 10)
//   });

//   const res = await request(app)
//     .post('/api/auth/login')
//     .send({
//       email: 'user@soft-enterprise.com',
//       password: '123123abc'
//     });

//   token = res.body.token;
// });

// afterAll(async () => {
//   // Clean up and close the connection
//   await User.deleteMany();
//   await Product.deleteMany();
//   await mongoose.connection.close();
// });

// describe('Product Endpoints', () => {
//   it('should add a product', async () => {
//     const res = await request(app)
//       .post('/api/products')
//       .set('Authorization', `Bearer ${token}`)
//       .send({
//         name: 'Sample Product',
//         price: 100,
//         quantity: 10,
//         pictures: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty('_id');
//   });
// });
