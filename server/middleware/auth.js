import jwt from 'jsonwebtoken';


async function authtoken(req,resp,next) {
    try {
        const token = req.headers?.token;
        if(!token){
            resp.status(401).json({
                message:'please login'
            })
        }else{
            jwt.verify(token,process.env.TOKEN_SECRET_KEY,function(err,decoded){
                console.log("token veryfication error:", err);
                console.log("token veryfication decoded:", decoded);

                if (err) {
                    console.log("error auth", err);
                    resp.status(401).json({
                        message:'please login'
                    })
                   }else{
                    req.id = decoded?.tokendata.id;
                   console.log('id:',req.id)
                   next();
                   }
                   
            })
        }
    } catch (error) {
        resp.status(400).json({
            message: error.message || error, // Log the error message instead of the whole error object
            data : [],
            error: true,
            success: false,
          });
    }
}
export default authtoken;