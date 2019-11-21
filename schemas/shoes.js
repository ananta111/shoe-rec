const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema({
    img: {data: Buffer, contentType: String},
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    gender: { type: String, required: true, trim: true, enum: ["Male", "Female", "Unisex"]},
    tags: { type: Array },
}, {timestamps: true});

module.exports = mongoose.model("Shoes", shoesSchema);


