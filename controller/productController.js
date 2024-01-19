import Product from "../models/productModels.js";

export const fetchproduct = async (req,res)=>{
 try{
  const productitems = await Product.find().sort({id:1});
   res.json(productitems);
  // console.log(dateOfSale);
 }catch(e){
  res.status(500).json({"error":"Server Problem"})
 }
}


export const selectedMonth = async (req,res)=>{
    try {
    
      // const regexPattern = new RegExp(`-${Month}-`);

      // Query to find documents with dateOfSale matching the specified month
      const getproducts = await Product.find().sort({id:1});
     const itemlist = [];
     getproducts.forEach(prod => {
      let date = new Date(prod.dateOfSale).getMonth();
      console.log(date+1)
      console.log(req.params.month)
      if((date+1)==(req.params.month)){
        let temp ={
       id: prod.id,
    title: prod.title,
    price: prod.price,
    category: prod.category,
    sold: prod.sold,
    image: prod.image,
    description: prod.description,
        }
        itemlist.push(temp);
      }
     });
      
    res.json(itemlist);
    } catch (error) {
      console.log(error)
      res.status(500).json({"error":"Server Problem"})
    }
}


 // it will return the count
  // const productitems = await Product.aggregate([{
  //   $match:{
  //     sold:true
  //   }
  // },{
  //   $count:"soldeitem"
  // }]);