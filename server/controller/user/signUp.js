import usermodel from '../../models/user/user.js'
import doctormondel from '../../models/user/doctorSchema.js'
import bcrypt from 'bcryptjs'
async function signup(req,resp) {
    try {

        const {password,role} = req.body;
        
       const salt = await bcrypt.genSalt(10);
       const hashedPass = await bcrypt.hash(password,salt);
       const payload = {
        ...req.body,
        password : hashedPass
       }
       if(role === 'DOCTOR'){
        const doctordata = new doctormondel(payload)
        const doctorData = await doctordata.save();
        resp.status(200).json({
            data:doctorData,
            error:false,
            sucess:true,
            message:"doctorprofile created successfully now apply for verification"
        });
       }else{
        const userData = new usermodel(payload);
        const saveUser = await userData.save();
        resp.status(200).json({
            data:saveUser,
            error:false,
            sucess:true,
            message:"User created successfully"
        });
       }
      
    } catch (err) {
        console.error('error:',err); // Log the error to identify the root cause
        if (err.code === 11000) {
          const duplicateKey = Object.keys(err.keyValue)[0]; // Identify the field causing the error
          return resp.status(400).json({
            message: `${duplicateKey} already exists`,
            error: true,
            success: false,
          });
        }
        resp.status(500).json({
          message: err.message,
          error: true,
          success: false,
        });
      }
    }      

export default signup;