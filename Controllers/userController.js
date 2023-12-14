//register
const users = require('../Models/userSchema')

exports.register = async (req, res) => {

    console.log(" Inside register controller function");
    const { username, email, password, location, bloodgroup, usertype } = req.body
    // res.status(200).json("Register Request Is Received!!!!")
    
try{  
      const existingUser = await users.findOne({email})
      if(existingUser) 
      {
        res.status(406).json("Account already exist...please login!!!")
      }else{
        const newUser = new users({
            username,email,password,bloodgroup,usertype,location

        }) 
         await newUser.save()
         res.status(200).json(newUser)
      }
}
catch(err){
    res.status(401).json(`Register API Failed!!!${err}`)
}
}
