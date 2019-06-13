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
