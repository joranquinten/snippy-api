const express = require("express");
const router = express.Router();

const snippet_controller = require("../controllers/snippet.controller.js");

router.post("/create", snippet_controller.snippet_create);
router.put("/:id/update", snippet_controller.snippet_update);
router.get("/:id", snippet_controller.snippet_details);
router.delete("/:id/delete", snippet_controller.snippet_delete);

module.exports = router;
