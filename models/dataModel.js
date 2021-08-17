const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    mobile : {
        type: String,
        required : true,
    },
},{timestamps:true});

const data = mongoose.model("data",dataSchema);

module.exports = data;