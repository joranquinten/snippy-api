const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SnippetSchema = new Schema({
  title: { type: String, required: false, max: 250 },
  content: { type: String, required: false },
  language: { type: String, required: false, max: 20 },
  tags: { type: Array, required: false },
  group: { type: String, required: false }
});

// Export the model
module.exports = mongoose.model("Snippet", SnippetSchema);
