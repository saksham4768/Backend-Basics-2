
const Todo = require("../models/ToDo");

exports.deleteToDo = async (req,res) =>{
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: `Todo ${id} data Deleted Successfully`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Internal Server Error",
        })
    }
}