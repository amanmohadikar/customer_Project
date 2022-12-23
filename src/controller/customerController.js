const customerModel = require("../model/customerModel")
const { isValidEmail, isIdValid, isValidName,  isValidMobile} = require("../validator/validator")

const createCustomer = async function (req, res) {
    try {
        let data = req.body
        let { firstName, lastName, mobileNumber, DOB, emailID, address, customerID, status } = data

        if (!firstName || !isValidName(firstName)) return res.status(400).send({ status: false, message: "first Name is not present or first name not valid" })

        if (!lastName || !isValidName(lastName)) return res.status(400).send({ status: false, message: "Last Name is not present or Last name not valid" })

        if (!mobileNumber || !isValidMobile(mobileNumber)) return res.status(400).send({ status: false, message: "Mobile no is not presente or mobile no not valid" })

        if (!DOB) return res.status(400).send({ status: false, message: "DOB is not present" })

        if (!emailID || !isValidEmail(emailID)) return res.status(400).send({ status: false, message: "email id not present or email id not valid" })

        if (!address) return res.status(400).send({ status: false, message: "address not present" })

        if (!customerID) return res.status(400).send({ status: false, message: "customer Id not present" })

        if (!status) return res.status(400).send({ status: false, message: "status not present" })
        if (status != "ACTIVE" && status != "INACTIVE") return res.status(400).send({ status: false, message: "status should be ACTIVE or INACTIVE" })

        let newData = await customerModel.create(data)
        return res.status(201).send({ status: true, message: "CUSTOMER DETAIL SUCCESSFULLY CREATED", data: newData })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}




const getCustomer = async function (req, res) {
    try {
        let obj = {
            status: "ACTIVE"
        }
        let getData = await customerModel.find(obj)

        return res.status(200).send({ status: false, message: getData })
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}




const deleteCustomer = async function (req, res) {
    try {
        let customerId = req.params.customerId
        if (!isIdValid(customerId)) return res.status(400).send({ status: false, message: "customerId not valid" })
        let isIdPresent = await customerModel.findById(customerId)
        if (!isIdPresent) return res.status(400).send({ status: false, message: "customer ID not exist" })
        if (isIdPresent.status == "INACTIVE") return res.status(400).send({ status: false, message: "data is already INACTIVE" })
        let newData = await customerModel.findByIdAndUpdate({ _id: customerId }, { $set: { status: "INACTIVE" } }, { new: true })
        return res.status(200).send({ status: true, message: newData })
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}





module.exports = { createCustomer, deleteCustomer, getCustomer }