const express = require("express");
const app = express();
const port = process.env.PORT || 8000
const router = require("./router/player");
require("./db/conn");
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})