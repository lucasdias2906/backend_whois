const mongoose = require("mongoose");
const User = mongoose.model("User");
const repository = require("../repositories/user-repository")

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get()
        res.status(200).send({
            data: data
        })

    } catch (error) {
        res.status(500).send({
            massage: "falha ao buscar dados"
        })

    }
}

