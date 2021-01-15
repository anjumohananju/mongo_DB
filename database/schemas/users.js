const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    phone_number : {
        type : Number,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },  
})

const userModel = mongoose.model("Posts",userSchema);
module.exports =  userModel;