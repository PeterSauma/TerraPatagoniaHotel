const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers')




router.get("/", mainControllers.index)

router.get("/home", mainControllers.index )

router.get("/galery", mainControllers.galery )

module.exports =router
