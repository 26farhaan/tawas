const { createServer } = require("https");
const { createProxyServer } = require("http-proxy");
const fs = require("fs");

const proxy = createProxyServer({ target: "http://localhost:3000" });

const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"),
  cert: fs.readFileSync("./cert/localhost.pem"),
};

createServer(options, (req, res) => {
  proxy.web(req, res);
}).listen(3443, () => {
  console.log("🔒 HTTPS proxy server listening at https://localhost:3443");
});
