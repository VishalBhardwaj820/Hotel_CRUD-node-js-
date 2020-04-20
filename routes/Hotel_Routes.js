const express=require('express');

// port Number on which Server will run
const port=8000;

// Create a Router Object
const hotel_routes=express.Router();

// Importing the model for accessing the Record For THE CRUD OPeration
const Hotel=require('../controllers/Hotel_Controllers');


// 1) Route For  Inserting A New Record In database 
hotel_routes.get('/create',Hotel.create);


// 2) Route For  Updating A New Record In database 
hotel_routes.get('/update/:id',Hotel.update);


// 3) Route For  Read A Single Record From database 
hotel_routes.get('/read/:id',Hotel.read);

// 4) Route For  Reading All  Records From database 
hotel_routes.get('/read/:id',Hotel.readall);

// 5) Route For  Delete A  Record From database 
hotel_routes.get('/delete/:id',Hotel.delete);


// EXporting  the Routes 
module.exports=hotel_routes;