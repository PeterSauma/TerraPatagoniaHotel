//Declaracion de frameworks
const express = require('express');
const app = express();
const path = require('path')

//>montar rutas 
const mainRoutes = require ('./scr/routes/mainRoutes')


//Declaracion de puertos
const port = 3000


// views
app.use(express.static(path.join(__dirname,'views')))
// public
app.use(express.static(path.join(__dirname,'public')))

//EJS
app.set('view engine', 'ejs')

//match
app.use('/',mainRoutes)




//montar el servidor                                                                                                                                                                                                                                                                                                                             
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(__dirname);
})
