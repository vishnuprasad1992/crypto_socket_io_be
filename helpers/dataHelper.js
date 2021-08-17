const userData = require('../models/dataModel');

const addData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newData = await userData(data);
            await newData.save();
            resolve(newData)
        } catch (error) {
            reject(error.message)
        }
    })
}

module.exports = {
    addData,
}