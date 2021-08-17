const users = require('../models/userModel');

const addNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newUser = await users(data);
            await newUser.save();
            resolve(newUser)
        } catch (error) {
            reject(error.message)
        }
    })
}

const getUser = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const extUsers = await users.findOne({ email });
            if (extUsers !== null) {
                return resolve(extUsers)
            }else{
                return resolve("invalid credentials")
            }
        } catch (error) {
            reject(error.message)
        }
    })

}


const getUserCheck = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const extUsers = await users.findOne({ email });
            if (extUsers === null) {
                return resolve(false)
            }
            if (extUsers.email) {
                return resolve(true)
            }
        } catch (error) {
            reject(error.message)
        }
    })
}


const gettingAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUsers = await users.find();
                 resolve(allUsers)
        } catch (error) {
            reject(error.message)
        }
    })
}


module.exports = {
    addNewUser,
    getUser,
    getUserCheck,
    gettingAllUser
}