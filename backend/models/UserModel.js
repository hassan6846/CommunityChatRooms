const validator=require("validator")
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[12,"Password must be at least 7 characters long"],
        maxlength:[128,"Password must be at most 128 characters long"],
        validate(value) {
            if (!validator.isStrongPassword(value, {
            minLength: 12,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
            })) {
            throw new Error("Password is not strong enough");
            }
        }
    },
    role:{
        type:String,
      
        enum:["user","admin"],

        default:"user"
    },
    avatar:{
        type:String,
        default:"https://avatar.iran.liara.run/public/boy?username=user",
        required:true
    },
    isActive:{
        //set false to block account..
        type:Boolean,
        default:true
    },

    passwordResetToken:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    Socketid:{
        
        type:String
    },

 


})
///////////////////////////////Methods
//HashPassword
UserSchema.pre("save",async function(next){
    const user=this
    if(user.isModified("password")){
        user.password=await bcrypt.hash(user.password,10)
    }
    next()
})
const User=mongoose.model("User",UserSchema)
module.exports=User