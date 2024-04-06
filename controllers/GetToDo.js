const Todo = require('../models/ToDo');
//Fetch All data which is present in DB
exports.GetToDo = async(req, res) =>{
    try{

        const ToDo = await Todo.find({});

        res.status(200).json({
            success: true,
            data: ToDo,
            message: 'Data Fetch Successfully',
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            data: err.message,
            message: 'Error in Data Fetch',
        });
    }
}

//Fetch data for a specific id  which is present in DB
exports.GetToDoById = async(req, res) =>{
    try{
        const id = req.params.id;

        const todo = await Todo.findById({_id : id})

        if(!todo){
            return res.status(404).json({
                success: false,
                message:"No Data Found with Given Id",
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            data: err.message,
            message: "Internal Server Error",
        })
    }
}