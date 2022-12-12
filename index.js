const fs = require('fs');

const http = require('http');

fs.writeFileSync('index.html',"<h1>Hello World</h1> <p>This is Chhatrapati Mandwe...</p>",'utf-8')
const data = fs.readFileSync('index.html','utf-8')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
})

server.listen(5000, ()=>{
    console.log('server is up');
})