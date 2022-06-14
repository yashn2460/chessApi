const express = require("express");
const router = express.Router();
const Player = require("../model/player");
router.post("/player",async(req,res)=>{
    try{
        const player = new Player(req.body);
        const createPlayer = await player.save();
        res.status(201).send(createPlayer);
    }
    catch(e){ res.status(400).send(e)}

});

router.get("/player",async(req,res)=>{
    try{
        const playerlist = await Player.find().sort("rank");
        res.status(200).send(playerlist);
    }catch(e){res.status(500).send(e)}
    
})
router.get("/player/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        const playername = await Player.find({name});
        if(!req.params.name){
            res.status(400).send(e)
        }
        res.status(200).send(playername);
    }catch(e){res.status(500).send(e)}
    
})
router.patch("/player/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        const playerUpdate = await Player.findOneAndUpdate({name},req.body,{new:true});
        res.status(200).send(playerUpdate);
    }catch(e){res.status(500).send(e)}
    
});
router.delete("/player/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        const playerDelete = await Player.findOneAndDelete({name});
        
        res.status(200).send(playerDelete);
    }catch(e){res.status(500).send(e)}
    
});
module.exports = router