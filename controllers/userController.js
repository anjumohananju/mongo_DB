const User = require("../database");



//get all post from Db
const getAllUser =async (req,res)=>{
    try {
       User.find().exec((err, User) => {
           
            res.json(User);
        })      
    }
    catch(err){
        res.json({status : "false" , message : "error"})
    }
};

// store a post in db
const storeAUser = async(req,res)=>{
    const user = new User({
        name : req.body.name,
        department: req.body.department,
        designation: req.body.designation,
        phone_number:req.body.phone_number,
        salary:req.body.salary
    });

    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({status : "false" , message : "error"})
    })
};

// // get a specific user from Db
const getSpecificUser = async (req,res)=>{
    let id = req.params.postId;
    id = id.substring(1);
    try {
        const user = await User.findById(req.params.postId);
        res.json(user);
    } catch (err) {
        res.json({ message : err })
    }
};

// // delete a specific user from Db
const deleteUser = async (req,res)=>{
    try {
        const removeduser = await User.deleteOne({_id : req.params.postId });
        res.json(removeduser);
    } catch (err) {
        res.json({ message : err })
    }
};

// // update a data of Db
const updateUser = async (req,res)=>{
    try {
        const updateUser = await User.updateOne(
            {_id : req.params.postId },
            { $set : { title : req.body.title }}
        );
        res.json(updateUser);
    } catch (err) {
        res.json({ message : err })
    }
};


module.exports = {
    getAllUser,
    storeAUser,
    getSpecificUser,
    deleteUser,
    updateUser,
  
};