const router = require("express").Router();
const {
  getTodos,
  getSignelPost,
  createTodo,
  deleteTodo,
  togggleCheck,
} = require("../controllers/userTodos");
router.get("/todos", getTodos);

// router.get("/getSingleTodo/:id", getSignelPost);

router.post("/create", createTodo);

router.delete("/delete/:id", deleteTodo);

router.patch("/togglecheck", togggleCheck);

module.exports = router;
