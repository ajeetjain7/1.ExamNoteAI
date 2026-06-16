import mongoose, { mongo } from "mongoose"

const connectDB = async () => {
     try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected sucessfully")
     }
     catch(error){
        console.log("DB error")
     }
}

export default connectDB