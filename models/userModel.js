const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    isAdmin : {
        type: Boolean,
        default:false
    },
    name : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        unique:true
    },
    password : {
        type: Object,
        required : true,
        minLength : 6
    },
},{timestamps:true});

const users = mongoose.model("users",userSchema);

module.exports = users;