const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers')




router.get("/", mainControllers.index)

router.get("/home", mainControllers.index )

router.get("/galery", mainControllers.galery )

router.get("/spa", mainControllers.spa )

module.exports =router
