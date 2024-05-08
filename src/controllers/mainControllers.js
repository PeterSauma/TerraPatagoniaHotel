const controller ={
    index: (req, res) => {
        res.render('index')
    },
    galery: (req, res) => {
        res.render('galery')
    },
    spa: (req, res) => {
        res.render('spa')
    },
}


module.exports = controller