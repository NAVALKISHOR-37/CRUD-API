const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// bodyParser is a third-party module used for handling form data
app.use(bodyParser.urlencoded({ extended: false }));

// use json
app.use(express.json());

// Database connection with MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud-api")
    .then(() => {
        console.log("connected with MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Create Schema with mongoose
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

// Create model (collection) with mongoose
const Product = mongoose.model("Product", productSchema);

// Create API using POST method

app.post("/api/v1/product/new", async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
});


// Read API using POST method

app.get("/api/v1/products", async (req, res) => {
    try {
        const product = await Product.find();

        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
});

// Update Product api

app.put("/api/v1/products/:id", async (req, res) => {
    
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
})

// Delete Product api

app.delete("/api/v1/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product is deleted",
        });
        
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
});



app.listen(4500, () => {
    console.log("Server working on http://127.0.0.1:4500");
});
