var express = require("express");
var router = express.Router();

require("./events")(router);

module.exports = router;
