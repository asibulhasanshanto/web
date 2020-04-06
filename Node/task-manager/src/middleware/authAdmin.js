const jwt = require("jsonwebtoken")
const User = require("../model/user")

const verifyAdmin = async (req, res, next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, 'thisismykey')
        const user = await User.findOne({_id:decoded._id, 'tokens.token':token})

        if(!user) {
            throw new Error()
        }
        else if(!(user.admin)) {
            throw new Error()
        }
        console.log(user.admin)
        req.token = token
        req.user = user
        next()
    } catch(e) {
        res.status(401).send({error:"please authenticate"})
    }
}
module.exports = verifyAdmin