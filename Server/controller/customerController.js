const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const customerModel=require("../model/customerModel");
const autoPassword=require("../utils/autoPassword");
const accountModel=require("../model/accountModel");
const nodemailer = require("nodemailer");
require("dotenv").config();

/* ---- User Registration ---- */
const Registration=async(req, res)=>{
        const {name,email,address,city,mobile,accountType}=req.body;
        try {
            const salt = await bcrypt.genSalt(10);
        const existUser = await customerModel.findOne({email:email});
        if (existUser) {
            return res.status(400).send("Email already exist");
        }
            var Password=autoPassword.autoPassword();
            const hashPassword = await bcrypt.hash(Password, salt);
            let Data=await customerModel.create({name:name,email:email,address:address,city:city,mobile:mobile,accountType:accountType, password:hashPassword});   
            const accNumber=Math.floor(100000000000 + Math.random() * 900000000000);
            const account=await accountModel.create({customerId:Data._id,accountNumber:accNumber});
            await customerModel.findByIdAndUpdate(Data._id, {$set : {accountID:account._id}});
            res.send({msg:"Registration Successfull",Data});
        } catch (error) {
         res.status(500).send({msg:"Something went wrong"}); 
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
        subject: ` ${name} Your,Registration Confirmation`,
        text: `Hello ${name}\n Your registration was successfully done in MyBank!\n Your Password is : ${Password} \nThank you,\n MyBank Team`
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
    

/* ---- User Login ---- */
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await customerModel.findOne({ email: email });
        
        if (!User) {
            return res.status(401).send("Invalid Email");
        }
        const passwordMatch = await bcrypt.compare(password, User.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid Password!");
        }

        const token = jwt.sign({ id: User._id }, process.env.SECRETE_KEY, { expiresIn: "1h" });

        return res.json({ token, msg: "Login Successful" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

/* ---- User Authentication ---- */
const Authenticate = async (req, res) => {
    try {
        const token = req.header("x-auth-token");

        if (!token) {
            return res.status(401).send("No token provided, authorization denied.");
        }

        const verify = await jwt.verify(token, process.env.SECRETE_KEY);

        const User = await customerModel.findById(verify.id).select("-password");
        
        if (!User) {
            return res.status(401).send("User not found.");
        }

        res.json(User);

    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid Token");
    }
};


/*---- Forgot password email verify and send otp ---- */
const EmailVerify=async(req, res)=>{
    const {email} = req.body;
    try {
        const EmailVerify= await customerModel.findOne({email:email});
        if(!EmailVerify.email == email){
            res.status(400).send({msg:"Invalid Email"});
        }
        const formatPass=autoPassword.autoPassword();
        await customerModel.findOneAndUpdate({email:email},{$set:{password:formatPass}});
        res.status(200).send({msg:"Email Verify Successfull"});
        
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

    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}


/* ---- Forgot Password ---- */
const ForgotPassword=async(req, res)=>{
    const {email, otp}=req.body;
    try {
        const EmailVerify= await customerModel.findOne({email:email});
        if(EmailVerify.password != otp){
            res.status(400).send({msg:"Invalid OTP"});
        }
        await customerModel.findOneAndUpdate({email:email},{$set:{password:otp}});
        res.status(200).send({msg:"Password Change Successfull"});

    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
}


/* ---- Change Password ---- */
const Changepassword=async(req, res)=>{
        const {email,Newpassword} = req.body;
        try {
        const EmailVerify= await customerModel.findOne({email:email});
        await customerModel.findOneAndUpdate({email:email},{$set:{password:Newpassword}});
        res.status(200).send({msg:"Password Change Successfull"});
            
        } catch (error) {
            res.status(500).send({msg:"Something went wrong"});
        }
}


module.exports={
    Registration,
    Login,
    Authenticate,
    EmailVerify,
    ForgotPassword,
    Changepassword
    
}
