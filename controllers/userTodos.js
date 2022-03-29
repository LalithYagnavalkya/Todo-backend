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
    const todo = await todos.findByIdAndDelete({ _id: id });
    if (!todo) {
      console.log("not found");
      return res.status(400).json({ message: "no todo found" });
    }
    res.status(200).json();
    console.log(" found");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const togggleCheck = async (req, res) => {
  const { id, checked } = req.body;
  console.log(req.body);
  try {
    const todo = await todos.findByIdAndUpdate(id, { checked: checked });
    console.log(todo);
    if (todo) {
      return res.status(200).json({ message: "successfuly updated" });
    } else {
      return res.status(500).json({ message: "not updated" });
    }
  } catch (err) {
    return res.status(500).json({
      message: "something went extremely wrong check your goddamn code",
    });
  }
};

module.exports = {
  getTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  togggleCheck,
};
