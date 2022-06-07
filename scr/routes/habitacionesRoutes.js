const express = require ('express');
const router = express.Router();
const habitacionesController = require ('../controllers/habitacionesController')




router.get("/", habitacionesController.mostrador)
router.get("/habitacion", habitacionesController.habitacion)



module.exports =router
