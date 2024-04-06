
const Todo = require("../models/ToDo");

exports.updatedToDo = async (req, res) =>{
    try{

        //Find id in which update the data
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} Data updated Successfully`,
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