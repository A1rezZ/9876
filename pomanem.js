console.log('gachi');


const readline = require('readline');

const fs = require('fs');

let teksti = 'Moi tiedosto! \n'

fs.readFile('popkaani.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('Tapahtui virhe.');
    }
    else {
        console.log(data);
    }
});

const datavirta = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('1) pro4itat fail')

console.log('2) dobavit stroku')

datavirta.question('1', function(vybor) {
    if(vybor == 1 ) {
        fs.readFile('popkaani.txt', 'utf8', function (err, data) {
            if (err) {
                console.log('Tapahtui virhe.');
            }
            else {
                console.log(data);
            }
        });
    }
    else if(vybor == 2 ) {
        
    fs.writeFile('popkaani.txt', teksti, { encoding: 'utf8', flag: 'a+' }, function(err) {
    if (err) {
        console.log('Virhe tiedostoon kirjoittamisessa.')
    }
    else {
        console.log('Kirjoitettu tiedostoon: ' + teksti);
    }
});
    }
    else {
        console.log('neizvetniy vybor')
    }
    datavirta.close()

});