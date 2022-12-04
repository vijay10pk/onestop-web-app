const collection = require('../config/connection');
const serviceDatabase=require('../models/services.json');
let service = {}

service.setupDB = () => {
    return collection.getProductCollection().then( prodColl => {
        return prodColl.deleteMany().then( () => {
            return prodColl.insertMany(serviceDatabase).then((data) => {
                if (data) return data
                else return null
            });
        } );
    } );
 }

service.getCategory=(category)=>{
    return collection.getProductCollection().then((model)=>{
        // console.log("i'm here")
        return model.find({"category":category},{_id:0}).then((data)=>{
            if(data!=0){
                // console.log(data)
                 return data
            }
            else {
                return null;
            }
        })
    })
}


service.getSearch=(search)=>{
    return collection.getProductCollection().then((model)=>{
        return model.find({}, { _id: 0 }).then((data) => {
            var list = []
            var objarr =[]
            data.map((obj) => {
                let cat = obj.sub_category
                cat.forEach((sub) => {
                    var b = sub.services
                    b.forEach((n) => {
                        objarr.push(n)
                    })
                })
            })
            objarr.map((obj)=>{
                var name=obj.name.split(" ");
                name.push(obj.category);
                for(let i of name){
                    if(i.toLowerCase()===search.toLowerCase()){
                        list.push(obj);
                        break;
                    }
                }
            })
            if(list!=0){
                 return list
            }
            else throw new Error("Data is not Available for your search")
        })
    })
}

module.exports = service