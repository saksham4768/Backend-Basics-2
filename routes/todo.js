const express = require("express");
const router = express.Router();

//import Controller
const {CreateToDo} = require('../controllers/CreateToDo');

// path mapped with controller
router.post("/createTodo", CreateToDo);

module.exports = router;

