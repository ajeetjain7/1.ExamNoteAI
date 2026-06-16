import UserModel from "../models/user.model.js"

export const getCurrentUser = async (req , res) => { 
    try {
        const userID = req.userId
        const user = await UserModel.findById(userID)
        if(!user){
            return res.status(400).json({message : "Current user is not found"})
        }
        return res.status(200).json(user)
    } 
    catch (error) {
        return res.status(500).json({message : `getCurrentUser error ${error}`})
    }
}