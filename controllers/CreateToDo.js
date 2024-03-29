
const Todo = require("../models/ToDo");

//Define Route Handler
exports.CreateToDo = async(request, response) =>{
    try{
        //extract title and description from rquest body
        const{title, description} = request.body;
        //create a new Todo object and insert in DB
        const todo = await Todo.create({title,description});

        //send a json response with a success flag
        response.status(200).json({
            success:true,
            data:todo,
            message:'Entry Created Successfully'
        });
    }
    catch(error){
        console.error(error);
        console.log(error);
        response.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:error.message,
        })
    }
};