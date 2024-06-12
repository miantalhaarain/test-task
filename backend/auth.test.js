// This file is not a part of Project it just only extra work to test API on run Time 
// -------------------------------------------------------------------------------------


// const request = require('supertest');
// const app = require('./server'); // Ensure your server file exports the app

// describe('Auth Endpoints', () => {
//   it('should authenticate user', async () => {
//     const res = await request(app)
//       .post('/api/auth/login')
//       .send({
//         email: 'user@soft-enterprise.com',
//         password: '123123abc'
//       });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('token');
//   });

//   it('should not authenticate user with wrong credentials', async () => {
//     const res = await request(app)
//       .post('/api/auth/login')
//       .send({
//         email: 'user@soft-enterprise.com',
//         password: 'wrongpassword'
//       });
//     expect(res.statusCode).toEqual(401);
//     expect(res.body).toHaveProperty('message', 'Invalid email or password');
//   });
// });
