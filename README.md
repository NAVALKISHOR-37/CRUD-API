I have built a CRUD application using Node.js, Express, and MongoDB. This project was a great learning experience, and I faced several challenges along the way, especially with handling database operations and API design.

Project Overview

This CRUD application allows users to create, read, update, and delete products. Here’s a quick guide to understanding and setting up the project.

Step-by-Step Guide:

Clone the Repository:

git clone https://github.com/yourusername/your-repository.git

cd your-repository

Install Dependencies:

Make sure you have Node.js and npm installed. Then run:

npm install

Setup MongoDB:

Ensure MongoDB is installed and running on your local machine or use a cloud MongoDB service. Update the mongoose.connect URL in your code if necessary.

Run the Application:
Start the server by running:

node app.js

The server will run on http://127.0.0.1:4500.

Testing the API:
Use a tool like Postman to test the API endpoints:

Create a Product (POST): http://127.0.0.1:4500/api/v1/product/new
Get All Products (GET): http://127.0.0.1:4500/api/v1/products
Update a Product (PUT): http://127.0.0.1:4500/api/v1/products/:id
Delete a Product (DELETE): http://127.0.0.1:4500/api/v1/products/:id

Key Features:

Node.js for server-side logic.
Express for handling routes.
MongoDB with Mongoose for database operations.

Challenges Faced:
Handling database operations efficiently.
Ensuring data validation and error handling.
Technologies used:

Node.js
Express
MongoDB
Mongoose
