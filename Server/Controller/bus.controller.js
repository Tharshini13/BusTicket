const busdetailes = require("../Model/bus.model")

busdetailes
module.exports = {

    addbus:(req,res)=>{



console.log(req.body);



        let {from,to,date,starttime,reachtime,startdate,reachdate,totalhours,travelsname,utilities,type,price,seats,rating} = req.body


       let TotalSeats = [];


      for(let i=1;i<=Number(seats);i++){

        let obj = {
            seatNo:i,
            status:true
        }

        TotalSeats.push(obj)
        
      }


      console.log(TotalSeats);
      
        

              


       


        busdetailes.create({from:from,to:to,date:date,starttime:starttime,startdate:startdate,reachdate:reachdate,reachtime:reachtime,totalhours:totalhours,travelsname:travelsname,utilities:utilities,type:type,price:price,seats:TotalSeats,rating:rating})
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





    },


    findbus : async (req, res)=>{

        console.log(req.body);
        console.log(req.user);
        
        

        let { from, to, date } = req.body;

        try {
            let d = await busdetailes.find({ from: from, to: to, date: date });
            res.json({
                status: true,
                busdata: d,
            });
        } catch (e) {
            res.json({
                status: false,
                msg: "error occurred in findbus"
            });
        }
        

    },

    findSingleBus : async (req,res)=>{

         let {id} = req.params

         busdetailes.findById({_id : id})
         .then((d)=>{
            res.send(d)
         })
         .catch((e)=>{
            res.send(e)
         })

    }
    
}