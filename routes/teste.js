const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("teste", { title: "Node é Super Show", numero: 20 })
})

module.exports = router
