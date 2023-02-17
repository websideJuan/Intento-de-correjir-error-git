const fs = require('fs')

fs.writeFile('./module/conjuntoHerramientas/index.js', 'console.log("jugando actualizado")', (err)=> {
    fs.writeFile('./module/conjuntoHerramientas/main.css', '*{box-sizing: border-box; margin: 0;padding: 0;}', (err)=> {
        fs.writeFile('./module/conjuntoHerramientas/index.html', '!k',(err) => {
            console.log(err)
        })
    })
})