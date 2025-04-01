const nodemailer = require("nodemailer");

async function Ticket(ticketData,bus) {
    let mailStructure = `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 40px;">
    <table style="max-width: 600px; width: 100%; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.15); margin: auto;">
        <!-- Header -->
        <tr>
            <td style="text-align: center; padding-bottom: 20px;">
                <h2 style="color: #4CAF50; font-size: 24px; margin: 0; text-align: center;">Booking Confirmation</h2>
                <p style="color: #777; font-size: 14px; margin-top: 5px; text-align: center;">Thank you for booking with us! Below are your ticket details.</p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
            </td>
        </tr>

        <!-- Ticket Details -->
        <tr>
            <td>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="font-weight: bold; padding: 10px; color: #333; ">Passenger Name:</td>
                        <td style="padding: 10px; color: #555;">${ticketData.username}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 10px; color: #333;">Booking ID:</td>
                        <td style="padding: 10px; color: #555;">${ticketData._id}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 10px; color: #333;">Date:</td>
                        <td style="padding: 10px; color: #555;">${new Date(ticketData.date).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 10px; color: #333;">Departure:</td>
                        <td style="padding: 10px; color: #555;">${bus.from}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 10px; color: #333;">Destination:</td>
                        <td style="padding: 10px; color: #555;">${bus.to}</td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="text-align: center; padding-top: 20px;">
                <p style="font-size: 12px; color: #999; text-align: center;">Safe travels! 🚀</p>
            </td>
        </tr>
    </table>
</body>

`;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tharshinisaravanan13@gmail.com",
            pass: "wdfx qoal ndet wuko",
        },
    });

    let mailOptions = {
        from: "tharshinisaravanan13@gmail.com",
        to: ticketData.email,
        subject: "Booking Confirmation",
        html: mailStructure,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error("Error sending email:", error);
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });
}

module.exports = Ticket;