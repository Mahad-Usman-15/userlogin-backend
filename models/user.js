import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const {Schema}=mongoose
const Userschema=Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true}

},
{timestamps:true}
)

const User=mongoose.model('User',Userschema)
export default User