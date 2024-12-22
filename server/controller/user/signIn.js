import usermodel from "../../models/user/user.js";
import doctormondel from "../../models/user/doctorSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function signin(req,res) {
   try {
    const {email,password,role} = req.body;

    if(role === 'DOCTOR'){
        const doctor = await doctormondel.findOne({email});
        if(!doctor){
            req.status(400).json({
                message:'user not found'
            })
        }

        const verfyuser = await bcrypt.compare(password, doctor.password);

        if(verfyuser){
            const tokendata={
                id : doctor._id,
                email:doctor.email
            }
        const token = jwt.sign({tokendata}, process.env.TOKEN_SECRET_KEY, {expiresIn:"60m"});
        const refreshtoken =  jwt.sign({tokendata}, process.env.TOKEN_SECRET_KEY, {expiresIn:"7d"});
        
        res.cookie('token', token ,{ httpOnly: true, secure: true,  })
        res.cookie('refreshtoken', refreshtoken ,{ httpOnly: true, secure: true,  })
        
            res.status(200).json({
                message:"login successful",
            })
        }else{
            res.status(400).json({
                message:"please enter password correctly"
            })
        }
  
    }else{
        const user = await usermodel.findOne({email});
    if(!user){
        req.status(400).json({
            message:'user not found'
        })
    }
    const veryfyuser = await bcrypt.compare(password,user.password);

    if(veryfyuser){
        const tokendata={
            id : user._id,
            email: user.email
        }
    const token = jwt.sign({tokendata}, process.env.TOKEN_SECRET_KEY, {expiresIn:"60m"});
    const refreshtoken =  jwt.sign({tokendata}, process.env.TOKEN_SECRET_KEY, {expiresIn:"7d"});
    
    res.cookie('token', token ,{ httpOnly: true, secure: true,  })
    res.cookie('refreshtoken', refreshtoken ,{ httpOnly: true, secure: true,  })
    
        res.status(200).json({
            message:"login successful",
            data:token
        })
    }else{
        res.status(400).json({
            message:"please enter password correctly"
        })
    }

    }
    
   } catch (error) {
    
   }
    
}

export default signin;