var db = require("../models");

module.exports = function(app) {
  // Find all Restaurants and return them to the user with res.json
  app.get("/api/searchRestaurant", function(req, res) {
    db.Restaurant.findAll({}).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  app.get("/api/Restaurants/:id", function(req, res) {
    // Find one Restaurant with the id in req.params.id and return them to the user with res.json
    db.Restaurant.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  app.post("/api/Restaurants", function(req, res) {
    // Create an Restaurant with the data available to us in req.body
    console.log(req.body);
    db.Restaurant.create(req.body).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  app.delete("/api/Restaurants/:id", function(req, res) {
    // Delete the Restaurant with the id available to us in req.params.id
    db.Restaurant.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

};
