const Shoes = require("../schemas/shoes")

exports.getAllShoes = async (req, res) => {
    try{
        const shoes = await Shoes.find({});
        res.send(shoes);
    } catch (e) {
        res.send(e.message)
    }
};

exports.getShoesById = async (req, res) => {
    try{
        const oneShoes = await Shoes.findById(req.params.id);
        res.send(oneShoes);
    } catch (e) {
        res.send(e.message);
    }

};

exports.addShoes  = async (req, res) => {
    console.log("Received a request from a client");
    const { brand, model, price, gender, tags, size, img } = req.body;
    let shoes = new Shoes({ brand, model, price, gender, tags, size, img });
    try {
        await shoes.save();
        res.sendStatus(201);
    } catch (e) {
        res.send(e.message);
    }


};

exports.deleteShoes = async (req, res) => {
    try {
        await Shoes.findByIdAndRemove(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        res.send(e.message);
    }
};

exports.getRecommendations = async (req, res) => {
    try {
        const recommendations = await Shoes.find({ tags: { $in: req.body.tags }, gender: req.body.gender, price: { $lte: req.body.budget } });
        console.log(recommendations);
        res.send(recommendations);
    } catch (e) {
        res.send(e.message);
    }
};

