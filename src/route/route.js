const express = require("express")
const router = express.Router()
const customerController = require("../Controller/customerController")
const cardController = require("../controller/createCard")

router.post("/createCustomer", customerController.createCustomer)

router.get("/getCustomer", customerController.getCustomer)

router.delete("/deleteCustomer/:customerId/user", customerController.deleteCustomer)

router.post("/card", cardController.createCard)

router.get("/getcard", cardController.getCard)
module.exports = router