const express = require("express");
const router = express.Router();

const snippets_controller = require("../controllers/snippets.controller.js");

router.get("/:page?", snippets_controller.snippets);

module.exports = router;
