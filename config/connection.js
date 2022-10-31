
const mongoose =require("mongoose");

mongoose.connect(process.env.MONGO_URL,{usNewUrlParser:true,userUnifiedTopology:true},
    ()=>{
    console.log("connected to MongoDB")
});



module.exports = mongoose.connection;
