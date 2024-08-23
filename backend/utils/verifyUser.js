import { errorHandler } from "./error.js";
import JWT from 'jsonwebtoken'
export const verifyToken = (req,res,next) => {
    const token = req.cookies.treeprog_token;
    if(!token) {
        return next(errorHandler(401,'Please signin again to your account'))
    }
    JWT.verify(token, process.env.JWT_SECRET,(err,user)=> {
        if(err) return next(errorHandler(403,'UnAuthorized')) ;
        req.user = user ;
        next();
    });

}