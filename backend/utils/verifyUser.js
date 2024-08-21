import { errorHandler } from "./error.js";
import JWT from 'jsonwebtoken'
export const verifyToken = (req,res,next) => {
    const token = req.cookies.treeprog_token;
    if(!token) {
        return next(errorHandler(401,'Unauthorized'))
    }
    JWT.verify(token, process.env.JWT_SECRET,(err,user)=> {
        if(err) return next(errorHandler(403,'Acces Forbiden')) ;
        req.user = user ;
        next();
    });

}