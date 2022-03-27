const router = require("express").Router();
const todoItems = require("./todo");

router.use(todoItems);

module.exports = router;
