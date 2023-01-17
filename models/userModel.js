import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userModel = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true , unique:true},
  password: { type: String, require: true },
  pic: {
    type: "String",
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{timestamp:true}
);

userModel.pre('save' , async function(next){
  if (!this.isModified){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password , salt);
})

const User = mongoose.model("User" , userModel);

export default User  ;