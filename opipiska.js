const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('tervehdys.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      const viikonpaiva = getViikonpaiva();
      const htmlWithReplacement = data.replace('##viikonpaiva##', viikonpaiva);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlWithReplacement);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

function getViikonpaiva() {
  const viikonpaivat = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'];
  const d = new Date();
  const paiva = d.getDay();
  return viikonpaivat[paiva];
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
