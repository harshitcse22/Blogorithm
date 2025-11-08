import mongoose from "mongoose";

const connectDB = async () => {
   try{
      mongoose.connection.on('connected', )
      await mongoose.connect(`${process.env.MONGODB_URL}/Blogorithm`)
   }catch(error){
     console.log(error.message);
   }
}

export default connectDB;