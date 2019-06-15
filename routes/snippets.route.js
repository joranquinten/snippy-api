const express = require("express");
const router = express.Router();

const snippets_controller = require("../controllers/snippets.controller.js");

router.get("/:page?", snippets_controller.snippets);
router.get("/search/:query/:page?", snippets_controller.snippets_search);

module.exports = router;
