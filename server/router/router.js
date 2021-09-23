const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers");

router.get("/list", controller.getAll);
router.post("/list", controller.post);
router.delete("/list/:id", controller.delete);

module.exports = router;
