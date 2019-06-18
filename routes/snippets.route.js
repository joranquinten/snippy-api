const express = require("express");
const router = express.Router();

const snippets_controller = require("../controllers/snippets.controller.js");

router.get("/:page?", snippets_controller.snippets);
router.get("/tags/:tag/:page?", snippets_controller.snippets_search_tag);
router.get("/language/:language/:page?", snippets_controller.snippets_search_language);
router.get("/search/:query/:page?", snippets_controller.snippets_search);

module.exports = router;
