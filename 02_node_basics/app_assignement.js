// assignement for module 03

const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    

    if (url === '/'){
        console.log(url, method)
        res.write('<html>')
        res.write('<head><title>Hello</title></head>')
        res.write('<body><h2>Hello</h2><p>Please enter your username</p><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/users' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const user = parseBody.split('=')[1];
            console.log(parseBody);
            res.write('<html>')
            res.write('<head><title>List of Users</title></head>')
            res.write(`<body><h2>List of users</h2><p>${user}</p></body>`)
            res.write('</html>')
            return res.end()
  
        });
    }
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h2>Hello</h2><p>Please enter your username</p><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
  
});

server.listen(3000);