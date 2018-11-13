var express = require("express");
var db = require("../models");
var router = express.Router();

//GET route for all burgers
router.get("/", function (req, res) {
  db.burger.findAll({}).then(function (data) {
    // console.log(data);

    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body, "this is request.body")
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function () {
    // console.log(data, "this is response from db insert");
    res.send("row added to db")
  });

});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;
  console.log(id, "this is the id");
  db.burger.update({
    devoured: req.body.devoured
  }, {
      where: {
        id: id
      }
    }).then(function (data) {
      console.log(data, "row updated");
      res.send("update happened on " + id);
    })
});

router.delete("/api/burgers/:id", function (req, res) {
  db.burger.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (data) {
      console.log(data);
      res.send("row deleted");
    })
});



module.exports = router;





