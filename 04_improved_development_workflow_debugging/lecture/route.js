const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><h1>Header</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end()
            })
        });
        
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><title>First page</title></head>')
    res.write('<html>')
    res.write('<body><h1>Hello from my Node</h1></body>')
    res.write('</html>')
    res.end();

};

module.exports =requestHandler;
