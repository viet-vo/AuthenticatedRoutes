const router = require('express').Router();


router.route("/")
    .get(function (req, res) {
        res.send("<h1>test</h1>");
    })