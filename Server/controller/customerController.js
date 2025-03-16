const customerModel=require("../model/customerModel");
const autoPassword=require("../utils/autoPassword");

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const CustomerRegister=async(req, res)=>{
    const {name,email,address,city,mobile,accountType}=req.body;
    try {
        var Password=autoPassword.autoPassword();
        console.log(Password);
        let Data=await customerModel.create({name:name,email:email,address:address,city:city,mobile:mobile,accountType:accountType, password:Password});
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

    try {
        const User = await customerModel.findOne({email:email});
        if (!User) {
            return res.status(401).send("Invalid Email");
        }

        // const passwordMatch = await bcrypt.compare(password, User.password);
        if (User.password != password) {
            return res.status(401).send("Invalid Password!");
        }

        res.send("Login Successfully")
    } catch (error) {
         console.log(error);
        res.status(500).send("Server Error");
    }

    
};




const CustomerResetPassword=async(req, res)=>{
    const { Oldpassword, Newpassword} = req.body;
    try {
        const ResetPass=await customerModel.findOne({password:Oldpassword});
        if(!ResetPass.password==Oldpassword){
            return res.status(401).send("Invalid Password");
        }
        else{
            const passwordMatch = await customerModel.updateOne({password:Newpassword});
            res.send("Password Reset Successfully");
        }
        
        
    } catch (error) {
        
    } 
}





const CustomerEmailVerify=async(req, res)=>{
    const {email} = req.body;
    try {
        const EmailVerify=await customerModel.findOne({email:email});
        var formatPass=autoPassword.autoPassword();
        res.send("Email Sent OTP Successfull");
        
    } catch (error) {
        console.log(error);
        
    }
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
    subject: `Forgot Your Password`,
    text: `Dear Account Holder \n You have requested a forgot password for your account. Please enter the following One-Time Password (OTP) on the password :${formatPass} \n Thank you`
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




module.exports={
    CustomerRegister,
    CustomerLogin,
    CustomerResetPassword,
    CustomerEmailVerify
}