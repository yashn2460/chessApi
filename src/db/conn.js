const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/ChessApi').then(()=>console.log("connection successful")).catch((err)=>console.log("Not connected"));