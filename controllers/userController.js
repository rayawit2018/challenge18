const User = require('../models/User');

module.exports = {
    // get all users
  getUsers(req, res) {
    User.find()
    .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
//   get single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((dbUserData) =>
      !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};

  // update a user

