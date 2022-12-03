const data = require('./services.json')

var newarr = []
var objarr =[]
data.map((obj)=>{
    let cat = obj.sub_category
    cat.forEach((sub)=>{
        var b = sub.services
        // console.log(b)
        b.forEach((n)=>{
            var newname = n.name.split(' ')
            objarr.push(n)
            // console.log(newname)
            kk
        })
    })
})

console.log(objarr)
