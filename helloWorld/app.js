const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.headers);

    // const log = `${Date.now()} : ${req.url} New Req Received ${req.headers.host}\n`;
    // // append request details on file
    // fs.appendFile('log.txt', log, (err, data) => {
    //     if (err) {
    //         console.log("sothing went wrong");
    //     } else {
    //         console.log(data);
    //     } 
    // }); 

    switch (req.url) {
        case '/': res.end("Hello Home Page and Pat");
            break;
        case '/about': res.end("About Page And Pat ");
            break;
        default: res.end("page not found");
    }
});

server.listen(8000,() => {
    console.log("server start at 8000");
});
