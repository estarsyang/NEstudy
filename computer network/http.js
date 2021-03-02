const net = require('net')

const response =
`HTTP/1.1 200 OK
date: Fri, 29 Jan 2021 12:53:30 GMT
  Content-Type: text/plain
  Connection: close
  
  hello world
`


const server = net.createServer(socket => {

  socket.end(response)
})

server.listen(80)