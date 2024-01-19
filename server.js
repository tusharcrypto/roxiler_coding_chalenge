import  express  from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routers/productRoutes.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors())
const port = process.env.PORT ||3000;

 // here we connect to out database whihc is mongodb
 mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("database connection successfill")
  app.listen(port,()=>{
    console.log(`server is running on ${port} succesfully`);
  })
}).catch(()=>{
console.log("Error occured");
})


// import  rout
app.use("/api/user",route)



// // this function will fetch the data from the  give api
// async function getapiddata(){
//   const apidata= await fetch();
//         const responsedata   = await apidata.json();
//         // console.log(responsedata);

//     // here we are upload the data to the database    
//   for(let i=0;i<responsedata.length;i++){
//     const itemOfProduct = new Product({
//       id:responsedata[i]['id'],
//       title:responsedata[i]['title'],
//       price:responsedata[i]['price'],
//       description:responsedata[i]['description'],
//       category:responsedata[i]['category'],
//       image:responsedata[i]['image'],
//       sold:responsedata[i]['sold'],
//       dateOfSale:responsedata[i]['dateOfSale'],
//     });
//    itemOfProduct.save();
   
//   }
//  }
//  getapiddata();





