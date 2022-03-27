const router = require("express").Router();
const {
  getTodos,
  getSignelPost,
  createTodo,
  deleteTodo,
} = require("../controllers/userTodos");
router.get("/todos", getTodos);

// router.get("/getSingleTodo/:id", getSignelPost);

router.post("/create", createTodo);

router.post("/delete/:id", deleteTodo);

module.exports = router;
