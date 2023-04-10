const nodemailer=require("nodemailer");
const sendMail=async()=>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'madge.leffler@ethereal.email',
            pass: '7Cwvpqc8AuXzyV1h8S'
        }
    });
    let info=await transporter.sendMail({
        from: '"Niranjan👻" <niroba.aware.26@gmail.com>', // sender address
        to: "niranjanaware26@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    console.log("Message sent: %s", info.messageId);
    // res.send(info)
}

module.exports=sendMail