const http = require("http");
const myServer =http.createServer( (req , res) => {
      console.log(req.headers)
      res.end("Hello from Server")
} ) 
myServer.listen(8000, () =>
     console.log("Server started")
   ) 