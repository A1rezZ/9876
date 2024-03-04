const fs = require('fs');
const readline = require('readline');
const datavirta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
fs.readFile('brum.csv', 'utf8', function (err, data) {
  if (err) {
    console.log('Tapahtui virhe.');
  }
  else {
    const autot = []
    let rivit = data.split(/\r?\n/);
    for (let rivi of rivit) {
      if (rivi == 'rekisterinumero,merkki,Vari,vuosimalli' || rivi == '') {
        continue;
      }

      let auto = rivi.split(',');

      let autoOlio = {
        rekisterinumero: auto[0],
        merkki: auto[1],
        vari: auto[2],
        vuosi: auto[3]
      };
      autot.push(autoOlio);
      fs.writeFile('brum.json',JSON.stringify(autot, null, 2),{ encoding: 'utf8' },function(err) {
          if (err) {
            console.log('Virhe tiedostoon kirjoittamisessa.')
          }
          
        }
      );
    }
    datavirta.question('nomer', function(vybor) {
        for(let bibika of autot){
            if(bibika.rekisterinumero.includes(vybor)){
                console.log('rekisterinumero: ' + bibika.rekisterinumero);
                console.log('merkki: ' + bibika.merkki);
                console.log('vari: ' + bibika.vari);
                console.log('vuosi: ' + bibika.vuosi);
            }
        }
        datavirta.close()
    });
  }
});