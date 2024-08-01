import userManager from "../data/mongo/manager/UserManager.mongo.js";

async function isValidEmail(req, res, next){
    try {       
        const { email } = req.body
        const one = await userManager.readByEmail(email)
        if(one){
            const error = new Error ("bad auth from register")
            error.statusCode = 401
            throw error
        }
        return next()
    } catch (error) {
        return next(error)
    }
}

export default isValidEmail