const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize.config");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 255]
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
}, {
  timestamps: true
});

module.exports = User;