const customerModel=require("../model/customerModel");
const autoPassword=require("../utils/autoPassword");

const nodemailer = require("nodemailer");

const CustomerRegister=async(req, res)=>{
    const {name,email,address,city,mobile,accountType}=req.body;
    try {
        var Password=autoPassword.autoPassword();
        console.log(Password);
        let Data=await customerModel.create({name:name,email:email,address:address,city:city,mobile:mobile,accountType:accountType});
        res.send("Registration Successfull");
    } catch (error) {
     console.log(error);   
    }
    
  

    // let data=req.body;
    // data.password=autoPassword.autoPassword();
    // let customer=new customerModel(data);
    // let result=await customer.save();
    // res.send(result);





    let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'rammaheshwari2022@gmail.com',
                pass: "fgey dkox nmti tunm"
            }
        }
    );

let mailDetails = {
    from: 'rammaheshwari2022@gmail.com',
    to: email,
    subject: ` ${name} Your,Registration Confirmation`,
    text: `Hello ${name}\n Your registration was successful in MyBank!\n Your Password is ${Password} \nThank you,\nTeam`
    // text: `${name} ${Password}`
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });

}




const CustomerLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);

    try {
        const User = await customerModel.findOne({email:email});
        console.log(User);
        if (!User) {
            return res.status(401).send("Invalid Email!!!");
        }

        const passwordMatch = await bcrypt.compare(password, User.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid Password!");
        }

        res.send("Login Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};


module.exports={CustomerRegister,
    CustomerLogin
}