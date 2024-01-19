import mongoose from "mongoose";

// // here we creat the product model of the item list
const productschema = mongoose.Schema({
  id:{
    type:Number,
    require:true,
    unique:true
  },
  title:{
    type:String,
    require:true,
  
  },
  price:{
    type:Number,
    require:true,
  },
  description:{
    type:String,
    require:true,
  },
  category:{
    type:String,
    require:true,
  
  },
  image:{
    type:String,
    require:true,

  },
  sold:{
    type:Boolean,
    require:true,

  },
  dateOfSale:{
    type:String,
    require:true,
   
  }

})
export default  mongoose.model("Product",productschema);
