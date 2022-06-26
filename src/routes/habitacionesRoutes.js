const express = require ('express');
const router = express.Router();
const habitacionesController = require ('../controllers/habitacionesController')




router.get("/", habitacionesController.mostrador)
router.get("/premium", habitacionesController.premium)  
router.get("/suite", habitacionesController.suite) 
router.get("/standar", habitacionesController.standar)

module.exports =router
