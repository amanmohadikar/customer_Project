const cardModel = require("../model/cardModel")
const customerModel = require("../model/customerModel")
const { isValidNumber, isValidName, isIdValid } = require("../validator/validator")

const createCard = async function (req, res) {
    try {
        let data = req.body
        let { cardNumber, cardType, customerName, customerID } = data
        if (!cardNumber) return res.status(400).send({ status: false, message: "cardNumber not present" })
        if (!isValidNumber(cardNumber)) return res.status(400).send({ status: false, message: "cardNumner not valid" })

        if (!cardType) return res.status(400).send({ status: false, message: "cardType not present" })
        if (cardType != "REGULAR" && cardType != "SPECIAL") return res.send({ message: "cardtype not valid" })

        if (!customerName) return res.status(400).send({ status: false, message: "customerName not present" })
        if (!isValidName(customerName)) return res.send({ message: "customer Name not valid" })


        if (!customerID) return res.status(400).send({ status: false, message: "customer Id not present" })
        if (!isIdValid(customerID)) return res.send({ message: "customer Id not valid" })

        let isIdPresent = await customerModel.findById(customerID)
        if (!isIdPresent) return res.status(400).send({ status: false, message: "Id not exist" })

        let newData = await cardModel.create(data)
        return res.status(201).send({ status: true, message: "card successfully created", data: newData })
    }
    catch (error) {
        return res.status(500).send({ message: false, message: error.message })
    }
}

const getCard = async function (req, res) {
    try {
        const getData = await cardModel.find()
        return res.status(200).send({ status: true, message: getData })
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



module.exports = { createCard, getCard }