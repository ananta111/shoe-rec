module.exports = function (app) {

    const shoes = require("../controllers/shoesController")
    app.get("/shoes", shoes.getAllShoes);

    app.post("/shoes", shoes.addShoes);

    app.get("/shoes/:id", shoes.getShoesById);

    app.post("/recommendations/shoes", shoes.getRecommendations);

    app.del("/shoes/:id", shoes.deleteShoes);

};