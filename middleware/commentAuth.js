// Middleware for determining user allowed to update or delete comments

module.exports = function (options) {
  return function (req, res, next) {
  options.dataModel.findById(options.id, function (err, data) {
    if (err) {
      console.log("Error finding comment");
      res.json({'error': err});
      return null;
    } else {

    }
  })
    if (req.user) {
      if (req.user._id.toString() === options.username) {
        return next();
      } else {
        console.log("Not authorized to update comments");
        res.json({message: "you are not allowed to update this comment."});
        return null;
      }
    } else {
      console.log("must be logged in the change comments");
      res.json({error: 'You must be logged in to update comments'});
      return null;
    }
  }
};
