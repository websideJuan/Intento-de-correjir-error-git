const fs = require('fs')



function getText (PATHfile) {
    return  new Promise(function(resolve, reject) {
        fs.readFile(PATHfile,'utf-8',(err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

// getText('./textoParaLeet/first.txt')
//     .then(res => {console.log(res)})
//     .catch(err => console.log(err))



async function read () {
    try {

        const res = await getText('./textoParaLeet/first.txt')
        
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}