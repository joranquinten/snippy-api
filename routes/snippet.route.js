const express = require("express");
const router = express.Router();

const checkJwt = require('../middleware/auth');
const snippet_controller = require("../controllers/snippet.controller.js");

router.get("/:id", snippet_controller.snippet_details);
router.post("/create", checkJwt, snippet_controller.snippet_create);
router.put("/:id/update", checkJwt, snippet_controller.snippet_update);
router.delete("/:id/delete", checkJwt, snippet_controller.snippet_delete);

module.exports = router;
