const Snippet = require("../models/snippet.model.js");

const isDevelop = process.env.NODE_ENV === "development";

exports.snippet_create = (req, res, next) => {
  const { title, content, description, languages, tags, group } = req.body;
  // TODO: Validation of provided values
  const snippet = new Snippet({
    title,
    content,
    description,
    languages,
    tags,
    group
  });

  snippet.save(err => {
    if (isDevelop && err) console.error('snippet_create', err);
    if (err) return next(err);
    if (isDevelop) console.log('snippet_create:', snippet);
    res.send("Snippet created successfully");
  });
};

exports.snippet_update = (req, res, next) => {
  // TODO: Validation of provided values
  Snippet.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (isDevelop && err) console.error(`snippet_update (${req.params.id}):`, err);
    if (err) return next(err);
    if (isDevelop) console.log(`snippet_update (${req.params.id}):`, req.body);
    res.send("Snippet updated.");
  });
};

exports.snippet_details = (req, res, next) => {
  Snippet.findById(req.params.id, (err, snippet) => {
    if (isDevelop && err) console.error(`snippet_details (${req.params.id}):`, err);
    if (err) return next(err);
    if (isDevelop) console.log(`snippet_details (${req.params.id}):`, snippet);
    res.send(snippet);
  });
};

exports.snippet_delete = (req, res, next) => {
  Snippet.findByIdAndRemove(req.params.id, err => {
    if (isDevelop && err) console.error('snippet_delete', err);
    if (err) return next(err);
    if (isDevelop) console.log('snippet_delete', req.params.id);
    res.send("Snippet deleted successfully!");
  });
};
