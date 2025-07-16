const User=require("../Models/User")
const Otp=require("../Models/OTP")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const Otpgenerator=require("otp-generator")


//sigup
const Singup=async(req,res)=>{
    try{
         const{
            firstname,
            lastname,
            email,
            password,
            confirmpassword,
            otp,
            accountType,
            phone,
         }=req.body;

         if(!firstname || !lastname || !email || !password || !confirmpassword || !otp || !accountType){
            return res.status(401).json({
                success:false,
                message:"please fill all credentials"
            })
         }

         if(password != confirmpassword){
            return res.status(401).json({
                success:false,
                message:"password doesnt match",
            })
         }

         if(await User.findOne({email})){
            return res.status(500).json({
                success:false,
                message:"user already exist"
            })
         }

         //otp verification
         //sort if it send multiple in once
         const OTP=await Otp.findOne({email});
         
       if (!OTP) {
         return res.status(404).json({
        success: false,
        message: "No OTP record found. Please request a new one.",
      });
       }
       
         if(OTP.otp!=otp){
            return res.status(401).json({
                success:false,
                message:"otp not verified!"
            })
        }
        
        const imgUrl = `https://robohash.org/${firstname}`;
        const hashpwd=await bcrypt.hash(password,10);

         const user=await User.create({
            firstname,
            lastname,
            email,
            password:hashpwd,
            accountType,
            thumbnail:imgUrl
         }) 
     
        //  console.log(user);

        return res.status(201).json({
            success:true,
            message:"successfully singup"
        })  
    }
    catch(error){
        
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"singup has been failed! try again"        
         })
    }
}
//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please fill all credentials",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Password is wrong",
      });
    }

    const payload = {
      email,
      id: user._id,
      accountType: user.accountType,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });

    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
      secure: true,
      sameSite: "None",
    };

    res.cookie("token", token, options);

    return res.status(201).json({
      success: true,
      payload,
      user,
      message: "User login successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Login failed!",
    });
  }
};


const logout=async(req,res)=>{
    try{
      const token=req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
    //   console.log(token)
      if(token){
        res.clearCookie("token",{
            httpOnly:true,
        })
        return res.status(200).json({
        success: true,
        message: "Logout successful",
      });
      }
      else return res.status(401).json({
        success:false,
        message:"no token exists!"
      })
    }
    catch(error){
         console.error(error);
          return res.status(401).json({
            success:false,
            message:"logout fail!"
        })
    }
}

const sendOtp=async(req,res)=>{
    try{

         const {email}=req.body
         console.log(email);
        //  const user=User.findOne({email});
        //  if(!user){
        //     return res.status(401).json({
        //         success:false,
        //         message:"user doesnot exist!"
        //     })
        //  }

         let otp=Otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
         })
 
         while(await Otp.findOne({otp})){
            otp=Otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
         })
         }
        // console.log(otp);
        const otpres=await Otp.create({otp,email})
        return res.status(201).json({
            success:true,
            otpres,
            message:"otp send successfully!"
        })
    }
    catch(error){
       console.error(error);
       return res.status(401).json({
        success:false,
        message:"otp sending failed!"
       })
    }
}

//verifytoken
const verifytoken=async(req,res)=>{
    try{
      const token=req.cookies?.token || req.body?.token || req.header("Authorization")?.replace("Bearer ", "");
       
       //console.log(token);
       if(!token){
        return res.status(401).json({
            success:false,
            message:"token doesnt exist",
        })
       }
       const payload=await jwt.verify(token,process.env.SECRET_KEY); 
       
       if(!payload){
        return res.status(401).json({
            success:false,
            message:"token verification fail!",
        })
       }
    // console.log(payload)
    // console.log(payload.id)
      const user=await User.findById(payload.id).populate("Profile").populate("courses").exec();
    //  console.log(user)
    //   console.log("User profile value:", user.Profile); 
      //   console.log(user.profile)
    //   console.log(user);
       req.user=payload;
       return res.status(201).json({
        success:true,
        user,
        message:"user is verified!",
       })
    }
    catch(error){
         console.error(error);
      return res.status(401).json({
        success:false,
        message:"user authentication failed!"
      })
    }
}
module.exports={sendOtp,login,Singup,logout,verifytoken};