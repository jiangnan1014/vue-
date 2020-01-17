const mockIndexData=require("./data/city.json");
module.exports={
    devServer:{
        port:5000,
        before(app){
            app.get("/city",(req,res)=>{
                res.json(mockIndexData);
            })
        }
    }
}