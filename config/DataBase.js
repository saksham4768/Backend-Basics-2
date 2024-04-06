
const mongoose = require('mongoose');

//Its used to feed the environment file data into process global object
require("dotenv").config;
const DataBaseConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then  (() => {console.log("Connection is Successfull")})
        .catch((error) =>{
            console.log("Issue in Connection");
            console.log(error.messsage);

            //what does this mean
            //Node.js method used to exit the current process with a status code. 
            //process is a global Node.js object that provides information about the current Node.js process.
            //Exit codes are used to indicate the reason for the process termination. 
            //A code of 0 typically indicates success, while non-zero codes indicate an error or failure.
            process.exit(1);
        })
}

module.exports = DataBaseConnect;