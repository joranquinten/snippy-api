const Snippet = require("../models/snippet.model.js");

exports.snippets = async (req, res, next) => {
  const page = req.params.page || 1;
  const limit = 15;
  const skip = page * limit - limit;

  const snippetsPromise = Snippet.find()
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" });

  const countPromise = Snippet.collection.countDocuments();
  const [snippets, count] = await Promise.all([snippetsPromise, countPromise]);

  if (!snippets.length && skip) {
    return next(
      `OMG!!! You asked for a page (page ${page}) that doesn't exist.`
    );
  }

  res.send({ snippets, count });
};

exports.snippets_search = async (req, res, next) => {
  const query = req.params.query;
  const page = req.params.page || 1;
  const limit = 15;
  const skip = page * limit - limit;

  const snippetsPromise = Snippet.find({$text: { $search: query } })
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" });

  const countPromise = Snippet.collection.find({$text: { $search: query } }).count();
  const [snippets, count] = await Promise.all([snippetsPromise, countPromise]);

  if (!snippets.length) {
    res.send({ snippets: [], count: 0 });
  }

  if (!snippets.length && skip) {
    return next(
      `OMG!!! You asked for a page (page ${page}) that doesn't exist.`
    );
  }

  res.send({ snippets, count });
};

exports.snippets_search_tag = async (req, res, next) => {
  const tag = req.params.tag;
  const page = req.params.page || 1;
  const limit = 15;
  const skip = page * limit - limit;

  const snippetsPromise = Snippet.find({tags: tag })
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" });

  const countPromise = Snippet.collection.find({tags: tag }).count();
  const [snippets, count] = await Promise.all([snippetsPromise, countPromise]);

  if (!snippets.length) {
    res.send({ snippets: [], count: 0 });
  }

  if (!snippets.length && skip) {
    return next(
      `OMG!!! You asked for a page (page ${page}) that doesn't exist.`
    );
  }

  res.send({ snippets, count });
};

exports.snippets_search_language = async (req, res, next) => {
  const language = req.params.language;
  const page = req.params.page || 1;
  const limit = 15;
  const skip = page * limit - limit;

  const snippetsPromise = Snippet.find({languages: language })
    .skip(skip)
    .limit(limit)
    .sort({ created: "desc" });

  const countPromise = Snippet.collection.find({languages: language }).count();
  const [snippets, count] = await Promise.all([snippetsPromise, countPromise]);

  if (!snippets.length) {
    res.send({ snippets: [], count: 0 });
  }

  if (!snippets.length && skip) {
    return next(
      `OMG!!! You asked for a page (page ${page}) that doesn't exist.`
    );
  }

  res.send({ snippets, count });
};
