
const mongoose = require('mongoose');

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
            process.exit(1);
        })
}

module.exports = DataBaseConnect;