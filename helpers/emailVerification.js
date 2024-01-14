const nodemailer = require("nodemailer");

async function emailVerification(email){
    const transporter = nodemailer.createTransport({
        service: "gmail",
       
        secure: true,
        auth: {
          user: "emon.edu2k22@gmail.com",
          pass: "xqvpvmorznndwhbe",
        },
      });

      const info = await transporter.sendMail({
        from: 'emon.edu2k22@gmail.com ',
        to: email, 
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: '<div><img alt=""src=https://i.ibb.co/dr1LNnK/unnamed-1-01.jpg style=width:100px;height:100px;border-radius:50%><h1>Hello</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>Officiis quis nemo veniam molestiae voluptate saepe fuga aliquam sunt sequi ab?</p><button style=background:tomato;padding:20px;border:none>Email Verification Done</button></div>', 
      });

}



module.exports = emailVerification 
