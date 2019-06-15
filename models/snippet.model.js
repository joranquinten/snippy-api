const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SnippetSchema = new Schema({
  title: { type: String, required: false, max: 250 },
  description: { type: String, required: false },
  content: { type: String, required: false },
  languages: { type: Array, required: false },
  tags: { type: Array, required: false },
  group: { type: String, required: false }
});

// Export the model
module.exports = mongoose.model("Snippet", SnippetSchema);
