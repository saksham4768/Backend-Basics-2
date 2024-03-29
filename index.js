
const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json body
app.use(express.json());

//import routes for ToDo APi;
const todoRoutes = require('./routes/todo');

//mount or append or add in the to do api routes
app.use('/api/v1', todoRoutes);

//start server
app.listen(PORT , () =>{
    console.log(`server Started Successfully at ${PORT}`);
})

//Default routes
app.get("/", (req, res) =>{
    res.send(`<h1>This is the home page</h1>`)
})
const dbconnect = require('./config/DataBase');
dbconnect();


