const Snippet = require("../models/snippet.model.js");

exports.snippet_create = (req, res, next) => {
  const { title, content, language, tags, group } = req.body;
  // TODO: Validation of provided values
  const snippet = new Snippet({
    title,
    content,
    language,
    tags,
    group
  });

  snippet.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Snippet created successfully");
  });
};

exports.snippet_update = (req, res, next) => {
  Snippet.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return next(err);
    res.send("Snippet updated.");
  });
};

exports.snippet_details = (req, res, next) => {
  Snippet.findById(req.params.id, (err, snippet) => {
    if (err) return next(err);
    res.send(snippet);
  });
};

exports.snippet_delete = (req, res, next) => {
  Snippet.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Snippet deleted successfully!");
  });
};
