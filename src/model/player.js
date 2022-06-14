const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    rank :{
        type:Number,
        max:10,
        min:1,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true,
        minlength:5
    },
    country:{
        type:String,
        maxlength:3,
        required:true
    },
    rating:{
        type:Number,
        max : 3000
    }
});
const Player = mongoose.model("Player",PlayerSchema);
module.exports = Player ;