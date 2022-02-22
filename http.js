  // `````````````
  const http = require('http')

  const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    res.end(`
    <h1> Requested page is not found</h1>
    <a href='/'>Back</a>
    `)
  })

  server.listen(5000)