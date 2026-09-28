var http = require("http");

console.log("Lab 03 -  NodeJs");
const employees = require('./Employee');


const port = process.env.PORT || 8081

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const names = employees.map(e => `${e.firstName} ${e.lastName}`).sort()
            return res.end(JSON.stringify(names));
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const total = employees.reduce((sum, e) => sum + e.Salary, 0);
            return res.end(JSON.stringify({ total_salary: total }));
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})