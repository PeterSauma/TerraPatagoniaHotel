const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers')




router.get("/", mainControllers.index)

router.get("/home", mainControllers.index )


module.exports =router
