// controller


const controller ={
    mostrador:(req, res) => {
        res.render('habitacionesMostrador')
    },

    premium:(req, res) => {
        res.render('premium')
    },

    suite:(req, res) => {
        res.render('suite')
    },

    standar:(req, res) => {
        res.render('standar')
    },

}


module.exports = controller