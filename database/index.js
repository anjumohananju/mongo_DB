const mongoose = require("mongoose");

//schemas
const User = require("./schemas/users");

//db connect
mongoose.connect(process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=>{
        console.log("connected db")
    }
)

module.exports = User;