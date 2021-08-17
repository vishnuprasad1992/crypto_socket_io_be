const { addData } = require("../helpers/dataHelper");

const addUserData = async (req, res) => {
    try {
        const { name, email, mobile } = req.body


        const userData = await addData({ name, email, mobile })
        if (userData) {
            return res.status(201).json({
                status: "success",
                message: " Data sent successfully"
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "something went wrong"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addUserData
}