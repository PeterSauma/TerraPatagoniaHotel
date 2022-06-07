const gama =[
    {
    category:'Premium',
    passengers: '2-4',
    price: '$500'
    },
    {
    category:'Suite',
    passengers: '3',
    price: '$250'
    },
    {
    category:'Standar',
    passengers: '2-3',
    price: '$150'
    },
]




const controller ={
    mostrador:(req, res) => {
        res.render('habitacionesMostrador', {gama})},
    habitacion:(req, res) => {
        res.render('habitacion', {gama})},
}


module.exports = controller