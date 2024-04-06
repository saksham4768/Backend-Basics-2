const express = require("express");
const router = express.Router();

//import Controller
const {CreateToDo} = require('../controllers/CreateToDo');
const{GetToDo, GetToDoById} = require('../controllers/GetToDo');
const {updatedToDo} = require('../controllers/UpdatedToDo');
const{deleteToDo} = require("../controllers/DeleteToDo");

// path mapped with controller
router.post("/createTodo", CreateToDo);
router.get("/getToDo", GetToDo);
router.get("/getToDo/:id", GetToDoById);
router.put("/updatedToDo/:id", updatedToDo);
router.delete("/deleteToDo/:id", deleteToDo);
module.exports = router;

