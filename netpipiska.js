const http = require('http');
const ruokalista = require('./ruokalista.json')
const server = http.createServer((req, res) => {
    const kokoUrl = new URL(`http://${req.hostname}${req.url}`);
    const reitti = decodeURIComponent(kokoUrl.pathname);
    const paiva = reitti.slice(1)
    for (let lista of ruokalista ){
        if (lista.paiva === paiva){
            res.writeHead(200, {
                'Content-Type':'text/html;charset=utf-8'
              });
              res.end(JSON.stringify(lista));
        }
    }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Palvelin toimii osoitteessa http://localhost:${port}`);
});
