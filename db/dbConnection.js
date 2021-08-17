const mongoose = require("mongoose");

const dbConnect = async ()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("mongodb connected successfully"))
    .catch(err=> console.log(err))
} 


module.exports = dbConnect;