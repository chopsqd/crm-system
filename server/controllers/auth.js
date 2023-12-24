module.exports.login = function (req, res) {
    res.json({
        email: req.body.login
    })
}

module.exports.register = function (req, res) {

}
