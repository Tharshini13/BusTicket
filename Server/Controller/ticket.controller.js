const busdetailes = require("../Model/bus.model");
const busticket = require("../Model/ticket.model");

module.exports = {
    bookticket: async (req, res) => {
        try {
            let { id } = req.params;
            let { username, email, phonenumber, seats } = req.body;

            phonenumber = String(phonenumber).trim();

            if (!Array.isArray(seats)) {
                seats = [seats]; 
            }
            seats = seats.map(Number).filter(n => !isNaN(n)); 

            let bus = await busdetailes.findOne({ _id: id });

            if (!bus) {
                return res.status(404).json({ status: false, msg: "Bus not found" });
            }

            const updateResult = await busdetailes.updateOne(
                { _id: id, "seats.seatNo": { $in: seats } },
                { $set: { "seats.$[elem].status": false } },
                { arrayFilters: [{ "elem.seatNo": { $in: seats } }] }
            );

            if (updateResult.modifiedCount === 0) {
                return res.status(400).json({ status: false, msg: "Seats update failed" });
            }

            const newTicket = await busticket.create({
                username,
                email,
                phonenumber,
                seats
            });

            return res.status(201).json({ status: true, msg: "Booking confirmed", ticket: newTicket });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: false, msg: "Error occurred while booking seats" });
        }
    }
};
