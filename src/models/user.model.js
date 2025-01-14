import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      }
    },
    { timestamps: true }
  );
  

  // userSchema.pre('save', async function (next) {
  //   const user = this;
  //   if (!user.isModified('password')) return next();
  
  //   try {
  //     const salt = await bcrypt.genSalt();
  //     user.password = await bcrypt.hash(user.password, salt);
  //     next();
  //   } catch (error) {
  //     return next(error);
  //   }
  // });
  // userSchema.pre("save", async function (next) {
  //   if (!this.isModified("password")) return next();
  
  //   this.password = bcrypt.hash(this.password, 10);
  //   next();
  // });
  
  // Compare the given password with the hashed password in the database
  userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  export const User = mongoose.model('User', userSchema);