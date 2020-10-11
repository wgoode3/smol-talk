const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'smol-talk.db'
});

sequelize.sync()
  .then(() =>  console.log("Successfully connected to db."))
  .catch(err => console.error("Unable to connect to db", err));

module.exports = sequelize;