// requerir librerias fs y path
const fs = require ('fs');
const path = require ('path')


// leer el archivo
const filePath = path.join(__dirname, "../data/habitacionesDataBase.json")

// controller




const controller ={
    mostrador:(req, res) => {
        let gama = JSON.parse(fs.readFileSync (filePath, "utf-8"));
        res.render('habitacionesMostrador', {gama})},
    habitacion:(req, res) => {
        let gama = JSON.parse(fs.readFileSync (filePath, "utf-8"));
        res.render('habitacion', {gama})},
}


module.exports = controller