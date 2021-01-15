const express = require ("express");
const router = express.Router();
const userController = require("../controllers/userController")


//get all post from Db
router.get("/",userController.getAllUser);

// store a post in db
router.post("/",userController.storeAUser);

// get a specific post from Db
router.get("/:postId",userController.getSpecificUser);

// delete a specific post from Db
router.delete("/:postId",userController.deleteUser);

// update a data of Db
router.patch("/:postId", userController.updateUser);


module.exports = router;