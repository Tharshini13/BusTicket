const busticket = require("../Model/ticket.model")

module.exports = {

    bookticket:(req,res)=>{

        console.log(req.body)
        
        let { username , email , phonenumber , seats } = req.body

        busticket.create({username:username,email:email,phonenumber:phonenumber,seats:seats})
        .then((d)=>{
            res.send("Ticket booked sucessfully")
        })
        .catch((e)=>{
            res.send("error")
        })
        
        
    }

}