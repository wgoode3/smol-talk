const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize.config");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = User;