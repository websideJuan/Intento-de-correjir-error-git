const http = require('http');
const objMdolue = require('./module/objectMain');

const notFound = `
<!DOCTYPE html />
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <main>
            <h1>404 Not Found</h1>
            <p>Arbol DOM pintado desde mi propio servidor en mi primera aplicacion desde nodeJS</p>
            <p>Ve directo a mi Pagina web!<a href="/"> inicio</a></p>
        </main>
    </body>
</html>

`

const inicio = `
<!DOCTYPE html />
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
        
    </head>
    <body>
        <main class="main">
            <h1>Inicio</h1>
        </main>
    </body>
</html>

`

const About = `
<!DOCTYPE html />
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
        
    </head>
    <body>
        <main class="main">
            <h1>About</h1>
        </main>
    </body>
</html>

`



const server = http.createServer((req, res) => {

        if(req.url === '/'){
            res.writeHead(200, {'Content-Type':'text/HTML'})
            res.write(inicio)
            return res.end()
        }
    
        if(req.url === '/about'){

            for(let i = 0 ; i < 100000; i++ ){
                console.log(Math.random() * i)
            }

            res.writeHead(200, {'Content-Type':'text/HTML'})
            res.write(About)
            return res.end()
        }
    
        res.writeHead(200, {'Content-Type':'text/HTML'})
        res.write(notFound)
        res.end()
})

let PORT= 3001;


server.listen(PORT, () => {
    console.log(`Servidor Corrido correctamente en el PORT: ${PORT}`)
})