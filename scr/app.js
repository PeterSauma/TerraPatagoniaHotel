// ************ Require's ************
const express = require('express');
const path = require('path');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));

//Declaracion de puertos
const port = 3000

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRoutes = require('./routes/mainRoutes'); // Rutas main
const habitacionesRoutes = require('./routes/habitacionesRoutes'); // Rutas habitaciones

app.use('/', mainRoutes);
app.use('/habitaciones', habitacionesRoutes);

//montar el servidor                                                                                                                                                                                                                                                                                                                             
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})


