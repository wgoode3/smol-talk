const router =  require('express').Router();
const Users = require("../controllers/users.controller");

router.get('/', Users.index);
router.post("/users", Users.create);

module.exports = router;
