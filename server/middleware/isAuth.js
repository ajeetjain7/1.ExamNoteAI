import Jwt from "jsonwebtoken"

const isAuth = async (req , res , next) => {
    try {
        let token = req.cookies?.token || req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json({message : "Token is not found"})
        }
        let verifyToken = Jwt.verify(token , process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(401).json({message : "User does not have a valid Token"})
        }
        req.userId = verifyToken.userId
        next()
    } 
    catch (error) {
        return res.status(500).json({message : `is auth error ${error}`})
    }
}

export default isAuth