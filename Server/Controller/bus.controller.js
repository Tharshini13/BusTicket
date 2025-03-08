const busdetailes = require("../Model/bus.model")

busdetailes
module.exports = {

    addbus:(req,res)=>{

        let {from,to,date,travelsname,utilities,type,price} = req.body


       


        busdetailes.create({from:from,to:to,date:date,travelsname:travelsname,utilities:utilities,type:type,price:price})
        .then((d)=>{

            res.json({
                status:true,
                "msg":"Bus Added Successfully!",
                data:d
            })

        })
        .catch((e)=>{

            res.json({
                status:false,
                "msg":e,
                "info":"Error Occured in addbus"
            })
        })





    }
    
}