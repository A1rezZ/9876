const http = require('http');

const htmlAlku =`
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Esimerkkisivu</title>
  </head>
  <body>
`;

const htmlLoppu =`
  </body>
  </html>
`;

const palvelin = http.createServer(function (req, res) {
  // selvitetään, mitä sivua pyydetään
  const kokoUrl = new URL(`http://${req.hostname}${req.url}`);
  // dekoodataan, jotta mahdolliset ääkköset tulevat "oikein"
  const reitti = decodeURIComponent(kokoUrl.pathname);

  if (reitti == '/') {
    // jos osoiteriville kirjoitettiin localhost:3000
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf-8'
    });
    res.end(htmlAlku +
         '<p>Tervetuloa Node.js-palvelimelle.</p>' + 
         '<a href="http://localhost:3000/javascript">Javascipt</a> <br> '+
         '<a href="http://localhost:3000/node.js">node</a> <br>'+
         '<a href="http://localhost:3000/express">express!!!!!!!</a> <br>'
         + htmlLoppu);
  }
  else if (reitti == '/javascript') {
    // jos osoiteriville kirjoitettiin localhost:3000/kirjasto
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf-8'
    });
    res.end(htmlAlku + '<p>jajajajajavaaaascriiipt.</p>' + htmlLoppu);
  }
  else if (reitti == '/node.js') {
    // jos osoiteriville kirjoitettiin localhost:3000/kirjasto
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf-8'
    });
    res.end(htmlAlku + '<p>node on node.</p>' + htmlLoppu);
  }
  else if (reitti == '/express') {
    // jos osoiteriville kirjoitettiin localhost:3000/kirjasto
    res.writeHead(200, {
      'Content-Type':'text/html;charset=utf-8'
    });
    res.end(htmlAlku + '<p>exprees posti kaka.</p>' + htmlLoppu);
  }
  else {
    res.statusCode = 404;
    res.end(htmlAlku + 'Sivua ei löytynyt' + htmlLoppu);
  }
});
palvelin.listen(3000, 'localhost', function(){
    console.log('localhost:3000 kuuntelee...');
  });