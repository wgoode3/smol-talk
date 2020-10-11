const User = require("../models/user.model");

class UsersController {
  index(req, res, next) {
    User.findAll()
      .then(users => res.render('index', { users }))
      .catch(err => res.json(err));
  }

  create(req, res, next) {
    User.create(req.body)
      .then(() => res.redirect("/"))
      .catch(err => res.json(err));
  }
}

module.exports = new UsersController();