const { encrypt, decrypt } = require("../Auth/auth");
const { addNewUser, getUserCheck, getUser, gettingAllUser } = require("../helpers/userHelper");


const registerNewUser = async (req, res) => {
    try {
        const { name, email,password, cPassword } = req.body
        const check = await getUserCheck(email);
        if (check === true) {
            return res.status(401).json({
                status: "error",
                message: " User already exists"
            })
        }
        else {
            if (password === cPassword) {
                const hashedPassword = await encrypt(password)
                const dataToRegsiter = {
                    name,
                    email,
                    password: hashedPassword
                }
                const userDetails = await addNewUser(dataToRegsiter)
                if (userDetails) {
                    return res.status(201).json({
                        status: "success",
                        message: " User Register successfully"
                    })
                } else {
                    return res.status(500).json({
                        status: "error",
                        message: "something went wrong"
                    })
                }
            }
            else {
                return res.status(500).json({
                    status: "error",
                    message: "Passwords not matching"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await getUser(email);
        if (user.email === email) {
            const verifiedPassword = await decrypt(user.password)
            if (verifiedPassword === password) {
                const dataToBeSend = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    auth :user.isAdmin
                }
                return res.status(201).json({
                    status: "success",
                    message: " logged in successfully",
                    authUser: dataToBeSend
                })
            } else {
                return res.status(401).json({
                    status: "error",
                    message: "invalid credentials"
                })
            }
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await gettingAllUser();
        if (users) {
            return res.status(201).json({
                status: "success",
                users
            })
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    registerNewUser,
    loginUser,
    getAllUsers
}