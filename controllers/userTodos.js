const todos = require("../database/models/todoModal");

const getTodos = async (req, res) => {
  try {
    const allTodos = await todos.find({});
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleTodo = async (req, res) => {
  console.log(helo);
};

const createTodo = async (req, res) => {
  const { title, checked } = req.body;
  try {
    const newTodo = await new todos({
      title,
      checked,
    });
    console.log(newTodo);
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = todos.findByIdAndDelete({ _id: id });
    if (!todo) {
      return res.status(400).json({ message: "no todo found" });
    }
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getTodos, getSingleTodo, createTodo, deleteTodo };
