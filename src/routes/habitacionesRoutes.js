const express = require ('express');
const router = express.Router();
const habitacionesController = require ('../controllers/habitacionesController')




router.get("/", habitacionesController.mostrador)
router.get("/:id", habitacionesController.habitacion)



module.exports =router
