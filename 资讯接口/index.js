// TODO: 待补充代码
const http = require('http');

const requestListener = function (req, res) {
    if ('/news' !== req.url) {
        res.writeHead(404);
        res.end("404");
        return;
    }

    // res.setHeader("Content-type", "text/html;charset=utf8"); // 需要在 writeHead 之前
    res.writeHead(200, { "Content-type": "text/html;charset=utf8" }); // https://www.w3schools.com/nodejs/func_http_requestlistener.asp
    
    res.end(`[
    {
      "channelId": "5572a108b3cdc86cf39001cd",
      "name": "国内焦点"
    },
    {
      "channelId": "5572a108b3cdc86cf39001ce",
      "name": "国际焦点"
    }
  ]`);
}

const server = http.createServer(requestListener);
server.listen(8080);