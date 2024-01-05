var experts = require('./data_experts.json')

exports.index = async (req, res) => {
    try {
        res.status(200)
        .send(experts)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

exports.show = async (req, res) => {
    try {
        let id = req.params.id
        let expert = experts.find(item => item.id = id)

        res.status(200)
        .send(expert)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

exports.create = async (req, res) => {
    try {
        let body = req.body
        experts.push(body)

        res.status(200)
        .send(body)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

