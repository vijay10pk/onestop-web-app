const collection = require('../config/connection');
let user = {}

//Setup the database
user.generateId=()=>{
    return collection.getCollection().then(model=>{
        return model.distinct("userId").then(ids=>{
            let nId=Math.max(...ids);
            return nId+1;
        })
    })
}

 user.loginUser = (email,password) => {
    return collection.getCollection().then( userColl => {
        // console.log("I'm here")
        return userColl.findOne({"email" : email}).then( data => {
            if(data){
                if( password == data['password']){
                    return data
                }else{
                    throw new Error("The password entered is incorrect!!")
                }
            }else{
                throw new Error("You are not registered.Please register to login");
            }
        })
    }) 
}

user.RegisterUser=(registerData)=>{
    return collection.getCollection().then(model=>{
            let userObj = {
                'userName': registerData.userName,
                'password': registerData.password,
                'phoneNumber': registerData.phoneNumber,
                'email': registerData.email
            }
            return model.findOne({"email" : registerData.email}).then( data => {
                if(!data){
                    // console.log("i'm here")
                    return model.insertMany([userObj]).then(data=>{
                        // console.log("i'm here")
                        if(data.length!=0){
                            return data
                        }
                        else{
                            throw new Error("Registration failed | Try again")
                        }
                    })
                }
                else throw new Error("Your emailID is already registered, Please login"); 
            })
    })
}

user.ProfessionalUser=(registerData)=>{
    return collection.getProfessionalCollection().then(model=>{
            let userObj = {
                'userName': registerData.userName,
                'password': registerData.password,
                'phoneNumber': registerData.phoneNumber,
                'email': registerData.email,
                'address': registerData.address,
                'service': registerData.service
            }
            return model.findOne({"email" : registerData.email}).then( data => {
                if(!data){
                    // console.log("i'm here")
                    return model.insertMany([userObj]).then(data=>{
                        // console.log("i'm here")
                        if(data.length!=0){
                            return data
                        }
                        else{
                            throw new Error("Registration failed | Try again")
                        }
                    })
                }
                else throw new Error("Your emailID is already registered, Please login"); 
            })
    })
}


module.exports = user