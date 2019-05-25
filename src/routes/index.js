"use strict"

// started project
const express = require("express");
const router = express.Router();

//rota

router.get("/",(req,res,next)=>{
    res.status (200).send({
        title:"backend whois",
        version:"0.0.1",
        server:"azure",
        company:"sousa",
    })
})

module.exports = router